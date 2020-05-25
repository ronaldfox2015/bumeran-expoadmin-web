import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { SponsorsService } from '../../../services/sponsors.service';
import { OPTIONS_NOTIFICATION } from 'app/app.constans';
import { Sponsor } from 'app/models/sponsor';

@Component({
  templateUrl: 'sponsor-add.component.html',
  styleUrls: [
    'sponsor-add.component.css'
  ]
})
export class SponsorAddComponent implements OnInit {
  isDeveloper: boolean;
  title: string;
  isEdit: boolean;
  sponsorForm: FormGroup;
  isSending: boolean;
  currentSponsor: Sponsor;
  imageLogo: any;
  optNotification: any;
  active: boolean;

  controlsForm: { [name: string]: AbstractControl };
  redirect: boolean;

  public optionsStickyNav: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private sponsorsService: SponsorsService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.title = 'Agregar Patrocinador';
    this.active = false;
    this.isSending = null;
    this.optionsStickyNav = [
      { text: 'Información General', rel: 'generalInformation' },
    ];
    this.optNotification = OPTIONS_NOTIFICATION;
    this.redirect = false;
    this.imageLogo = this.buildInputImages([
      {
        'folder': 'sponsor',
        'controlName': 'image'
      }
    ]);
  }

  ngOnInit() {
    // ver README para obtener más información sobre el query parámetro
    this.route.queryParams
      .filter(params => params.dev)
      .subscribe(params => {
        this.isDeveloper = params.dev;
      });
    // --
    this.isEdit = this.route.snapshot.data['isEdit'];
    if (this.isEdit) {
      this.title = 'Editar Patrocinador';
      this.sponsorsService.getSponsor(this.route.snapshot.params['id'])
        .subscribe(
          (response) => {
            this.currentSponsor = new Sponsor(response);
            this.active = true;
            this.imageLogo.fields[0].source = this.currentSponsor.imageUrl;
            this.buildForm();
          },
          error => this.notificationService.error(error)
        );
    } else {
      this.active = true;
      this.currentSponsor = new Sponsor();
      this.buildForm();
    }
  }

  private buildForm() {
    this.sponsorForm = this.formBuilder.group({
      category: [this.currentSponsor.category, [
        Validators.required
      ]],
      companyName: [this.currentSponsor.companyName, [
        Validators.minLength(2),
        Validators.required,
      ]],
      url: [this.currentSponsor.url, [
        // tslint:disable-next-line:max-line-length
        Validators.pattern(`^(?:https?:\/\/)(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.((?!js\\b)[a-z]){2,4}\\b(?:[-a-zA-Z0-9@:%_\\+.~#?&//=]*)$`),
        Validators.required,
      ]],
      image: [this.currentSponsor.image, [
        Validators.required
      ]],
      coords: this.formBuilder.group({
        desktop: [this.currentSponsor.coords.desktop],
        tablet: [this.currentSponsor.coords.tablet]
      }),
    });

    this.controlsForm = {
      'image': this.sponsorForm.get('image'),
    };
  }

  private buildInputImages(inputs: any[]) {
    const images = {};
    images['metadata'] = 'image/png, image/jpeg, image/jpg';
    images['loading'] = false;
    images['fields'] = [];
    for (const object of inputs) {
      const current_template = this.imageObjectTemplate();
      Object.assign(current_template, object);
      images['fields'].push(current_template);
    }
    return images;
  }

  private imageObjectTemplate() {
    return {
      source: '',
      error: ''
    }
  }

  uploadImage(data, field, formsControl: AbstractControl) {
    const { formData } = data;
    formData.append('folder', field['folder']);
    field['error'] = '';
    field['loading'] = true;
    field['source'] = '';
    this.sponsorsService.uploadFile(formData, 'image')
      .subscribe(
        response => {
          formsControl.setValue(response.name);
          field['source'] = response.link;
          field['loading'] = false;
        },
        error => {
          field['loading'] = false;
          this.resetInputImage('', field, formsControl);
          this.notificationService.error(error.message);
        }
      );
  }

  resetInputImage(error, field, formsControl: AbstractControl) {
    formsControl.setValue('');
    field['error'] = error;
    field['source'] = '';
  }

  submitSponsor() {
    this.isSending = true;
    if (this.isEdit) {
      this.sponsorsService.editSponsor(this.sponsorForm.value, this.route.snapshot.params['id'])
        .subscribe(
          response => {
            this.redirect = true;
            this.notificationService.success(response.message);
          },
          error => {
            this.isSending = false;
            this.notificationService.error(error.message);
          }
        );
    } else {
      this.sponsorsService.saveSponsor(this.sponsorForm.value)
        .subscribe(
          response => {
            this.redirect = true;
            this.notificationService.success(response.message);
          },
          error => {
            this.isSending = false;
            this.notificationService.error(error.message);
          }
        );
    }
  }

  redirectSponsor() {
    if (this.redirect) {
      this.router.navigate(['/patrocinadores']);
    }
  }

  cancelSponsor() {
    this.router.navigate(['/patrocinadores']);
  }
}
