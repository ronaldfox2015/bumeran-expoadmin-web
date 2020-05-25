import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { StandService } from '../../../services/stand.service';
import { NotificationsService } from 'angular2-notifications';
import { CompaniesService } from '../../../services/companies.service';
import { IndustryService } from '../../../services/industry.service';
import { IndustryList } from 'app/models/industryList';
import { OPTIONS_NOTIFICATION } from 'app/app.constans';
import { rucValidator } from 'app/all/library/validations/ruc-validator';
import { latitudeValidator } from 'app/all/library/validations/latitude-validator';
import { longitudeValidator } from 'app/all/library/validations/longitude-validator';
import { Company } from 'app/models/company';
import { Observable } from 'rxjs/Observable';
import { DrawCanvasLibrary } from '../../../all/library/draw-stand.library';

@Component({
  templateUrl: 'company-add.component.html',
  styleUrls: [
    'company-add.component.css'
  ]
})
export class CompanyAddComponent implements OnInit, AfterViewChecked {
  @ViewChild('standPreview') canvasPreview: ElementRef;
  isDeveloper: boolean;
  title: string;
  exportCanvasWidth: number;
  initCanvasParams: any;
  drawCanvasLibrary: DrawCanvasLibrary;
  isEdit: boolean;
  companyForm: FormGroup;
  isSending: boolean;
  isSendingDocument: boolean;
  currentCompany: Company;
  imagesStand: any;
  imagesGallery: any;
  imageLogo: any;
  uploadError: Array<string>;
  industries: IndustryList[];
  optNotification: any;
  currentStandList: Object;
  currentStandRule: Object;
  profileTitles: Array<string>;
  active: boolean;

  controlsForm: { [name: string]: AbstractControl };
  redirect: boolean;

  errorMessageFile: string;

  public valueColor1 = '#378CC8';
  public valueColor2 = '#045584';
  public optionsStickyNav: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompaniesService,
    private industryService: IndustryService,
    private standService: StandService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.title = 'Agregar Empresa';
    this.errorMessageFile = 'El archivo es demasiado grande, no debe sobrepasar los 8MB.';
    this.exportCanvasWidth = 1080;
    this.active = false;
    this.initCanvasParams = {};
    this.isSending = null;
    this.isSendingDocument = false;
    this.optionsStickyNav = [
      { text: 'Información General', rel: 'generalInformation' },
      { text: 'Stand', rel: 'stand' },
      { text: 'Perfil Institucional', rel: 'institutionalProfile' },
      { text: 'Redes Sociales', rel: 'socialNetwork' },
      { text: 'Galería de Imágenes', rel: 'imageGallery' },
      { text: 'Descargables', rel: 'downloadable' }
    ];
    this.profileTitles = ['Misión', 'Visión', '¿Quiénes Somos?'];
    this.optNotification = OPTIONS_NOTIFICATION;
    this.industries = [];
    this.currentStandList = {};
    this.currentStandRule = {};
    this.uploadError = [];
    this.redirect = false;
    this.imagesStand = this.buildInputImages([
      {
        'folder': 'image_totem',
        'controlName': 'name',
        'title': 'Imagen Totem',
        'disabled': true,
        'from': 'stand',
        'size': '126x244'
      },
      {
        'folder': 'image_banderole_1',
        'controlName': 'name',
        'title': 'Imagen Banderola 1',
        'disabled': true,
        'from': 'stand',
        'size': '80x242'
      },
      {
        'folder': 'image_banderole_2',
        'controlName': 'name',
        'title': 'Imagen Banderola 2',
        'disabled': true,
        'from': 'stand',
        'size': '80x242'
      },
      {
        'folder': 'image_poster_1',
        'controlName': 'name',
        'title': 'Imagen Poster 1',
        'disabled': true,
        'from': 'stand',
        'size': '128x115'
      },
      {
        'folder': 'image_poster_2',
        'controlName': 'name',
        'title': 'Imagen Poster 2',
        'disabled': true,
        'from': 'stand',
        'size': '128x115'
      },
      {
        'folder': 'image_top',
        'controlName': 'name',
        'title': 'Imagen Logo Top',
        'disabled': true,
        'from': 'stand',
        'size': '830x80'
      },
      {
        'folder': 'image_counter',
        'controlName': 'name',
        'title': 'Imagen Mostrador',
        'disabled': true,
        'from': 'stand',
        'size': '165x100'
      },
      {
        'folder': 'image_monitor',
        'controlName': 'name',
        'title': 'Imagen Monitor',
        'disabled': true,
        'from': 'stand',
        'size': '205x119 (bronce) y 270x156 (oro y plata)'
      }
    ]);
    this.imagesGallery = this.buildInputImages([]);

    this.imageLogo = this.buildInputImages([
      {
        'folder': 'logo',
        'controlName': 'logo'
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
      this.title = 'Editar Empresa';
      let obsIndustries, obsStand, obsParamsCanvasStand, obsAmphitryon;
      this.companyService.getCompany(this.route.snapshot.params['id'], this.route.snapshot.params['category'])
        .flatMap(
          (response) => {
            this.currentCompany = new Company(response);
            obsIndustries = this.industryService.getIndustries(this.currentCompany.category);
            obsStand = this.standService.getStandData(this.currentCompany.stand.type_id);
            obsParamsCanvasStand = this.companyService.getStandModels(this.currentCompany.stand.model_id);
            obsAmphitryon = this.companyService.getStandAmphitryon(this.currentCompany.stand.amphitryon);
            this.fitImageSource(this.imagesGallery, this.currentCompany.image_gallery);
            return Observable.combineLatest(obsIndustries, obsStand, obsParamsCanvasStand, obsAmphitryon);
          }
        )
        .subscribe(
          (combined: any[]) => {
            // Se setea Industrias
            this.industries = combined[0];
            // Se setea Stands
            this.currentStandList = combined[1].list;
            this.currentStandRule = combined[1].rules;
            // Se setea Parametros de Canvas
            this.initCanvasParams = combined[2].data;
            // Se setea Parametros de Canvas
            this.initCanvasParams['imageStands']['amphitryon']['source'] = combined[3].data.image;
            // Se setean colores
            this.valueColor1 = this.currentCompany.stand.colors.color_1;
            this.valueColor2 = this.currentCompany.stand.colors.color_2;
            // Formulario
            this.active = true;
            // Se setean los stands
            // TODO: for de for refactorizar
            this.imageLogo.fields[0].source = this.currentCompany.logo;
            this.buildForm();
            for (const imageStand of this.currentCompany.stand.images) {
              for (const image of this.imagesStand.fields) {
                if (imageStand.type === image.folder) {
                  const currentImageKey = image.folder.replace('image_', '');
                  image['source'] = imageStand.link;
                  this.controlsForm[imageStand.type].get('name').setValue(imageStand['name']);
                  this.initCanvasParams['imageStands'][currentImageKey]['source'] = imageStand.link;
                  break;
                }
              }
            }
            this.enableStandControlsDepends(this.currentStandRule);
            // Se setean las redes sociales
            for (const sociaMedia of this.currentCompany.social_media) {
              this.addSocialNetworkTemplate(sociaMedia.link, sociaMedia.name);
            }
            // Se setean las images de la Galeria
            for (const image of this.currentCompany.image_gallery) {
              this.addTemplateImageGallery(image['name'], image['link']);
            }
            // Se setean los documentos
            for (const document of this.currentCompany.document) {
              this.addDocumentTemplate(document.title, document.link, document.name);
            }

            // Se setea el perfil
            for (const profile of this.currentCompany.profile) {
              this.addProfileTemplate(profile.title, profile.description);
            }

            // Se setea la industria
            for (const item of this.industries) {
              if (item.id === this.currentCompany.industry_id) {
                this.controlsForm['industry_name'].setValue(item.name);
              }
            }
            // Se setea la categoria
            this.controlsForm['category'].setValue(this.currentCompany.category);
          },
          error => this.notificationService.error(error)
        );
    } else {
      this.active = true;
      this.currentCompany = new Company();
      this.buildForm();
    }
  }

  ngAfterViewChecked() {
    // Valida que el elemento canvas no este vacío y que el objeto drawCanvasLibrary no haya sido creado
    if (typeof this.drawCanvasLibrary === 'undefined' && typeof this.canvasPreview !== 'undefined') {
      this.drawCanvasLibrary = new DrawCanvasLibrary(this.canvasPreview.nativeElement, this.exportCanvasWidth);
      if (this.isEdit) {
        let colors;
        colors = [this.controlsForm['color_1'].value, this.controlsForm['color_2'].value];
        this.drawCanvasLibrary.buildStand(colors, this.initCanvasParams);
      }
    }
  }
  // Inicializa el formulario con FormBuilder
  private buildForm() {
    // FormBuilder permite especificar el valor y las validaciones de un campo
    // * Tambien es posible realizarlo de manera manual con FormGroup/FormControl
    this.companyForm = this.formBuilder.group({
      document_number: [this.currentCompany.document_number, [
        Validators.required,
        Validators.pattern(`^[0-9]*$`),
        rucValidator()
      ]],
      latitude: [this.currentCompany.latitude, [
        latitudeValidator()
      ]],
      longitude: [this.currentCompany.longitude, [
        longitudeValidator()
      ]],
      coords: this.formBuilder.group({
        desktop: [this.currentCompany.coords.desktop],
        tablet: [this.currentCompany.coords.tablet]
      }),
      business_name: [this.currentCompany.business_name],
      trade_name: [this.currentCompany.trade_name],
      logo: [this.currentCompany.logo, [
        Validators.required
      ]],
      slug: [this.currentCompany.slug],
      category: ['', [
        Validators.required
      ]],
      industry_id: [{ value: this.currentCompany.industry_id, disabled: true && !this.isEdit }, [
        Validators.required
      ]],
      industry_name: [this.currentCompany.industry_name],
      offer_type: [{ value: this.currentCompany.offer_type, disabled: !(this.currentCompany.category === 'Educacion') }, [
        Validators.required
      ]],
      stand: this.formBuilder.group({
        type_id: [this.currentCompany.stand.type_id, [
          Validators.required
        ]],
        model_id: [{ value: this.currentCompany.stand.model_id, disabled: true }, [
          Validators.required
        ]],
        amphitryon: [{ value: this.currentCompany.stand.amphitryon, disabled: true }, [
          Validators.required
        ]],
        colors: this.formBuilder.group({
          color_1: [{ value: this.valueColor1, disabled: true }, [
            Validators.required,
            Validators.pattern(`^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$`)
          ]],
          color_2: [{ value: this.valueColor2, disabled: true }, [
            Validators.required,
            Validators.pattern(`^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$`)
          ]]
        }),
        images: this.formBuilder.array([]),
        video: [
          { value: this.currentCompany.stand.video, disabled: true },
          [Validators.required]
        ]
      }),
      image_gallery: this.formBuilder.array([]),
      profile: this.formBuilder.array([]),
      social_media: this.formBuilder.array([]),
      document: this.formBuilder.array([])
    });

    this.addStandImages();

    this.controlsForm = {
      'category': this.companyForm.get('category'),
      'industry_id': this.companyForm.get('industry_id'),
      'industry_name': this.companyForm.get('industry_name'),
      'offer_type': this.companyForm.get('offer_type'),
      'business_name': this.companyForm.get('business_name'),
      'trade_name': this.companyForm.get('trade_name'),
      'document_number': this.companyForm.get('document_number'),
      'latitude': this.companyForm.get('latitude'),
      'longitude': this.companyForm.get('longitude'),
      'logo': this.companyForm.get('logo'),
      'slug': this.companyForm.get('slug'),
      'type_id': this.companyForm.get('stand').get('type_id'),
      'model_id': this.companyForm.get('stand').get('model_id'),
      'amphitryon': this.companyForm.get('stand').get('amphitryon'),
      'color_1': this.companyForm.get('stand').get('colors').get('color_1'),
      'color_2': this.companyForm.get('stand').get('colors').get('color_2'),
      'images': this.companyForm.get('stand').get('images'),
      'image_totem': this.companyForm.get('stand').get('images').get([0]),
      'image_banderole_1': this.companyForm.get('stand').get('images').get([1]),
      'image_banderole_2': this.companyForm.get('stand').get('images').get([2]),
      'image_poster_1': this.companyForm.get('stand').get('images').get([3]),
      'image_poster_2': this.companyForm.get('stand').get('images').get([4]),
      'image_top': this.companyForm.get('stand').get('images').get([5]),
      'image_counter': this.companyForm.get('stand').get('images').get([6]),
      'image_monitor': this.companyForm.get('stand').get('images').get([7]),
      'image_gallery': this.companyForm.get('image_gallery'),
      'video': this.companyForm.get('stand').get('video'),
      'document': this.companyForm.get('document_number')
    };
  }

  private addStandImages() {
    // TODO: for de for refactorizar
    const control = <FormArray>this.companyForm.get('stand').get('images');
    for (let index = 0; index < this.imagesStand.fields.length; index++) {
      let name = '';
      for (const imageStand of this.currentCompany.stand.images) {
        if (imageStand['folder'] === this.imagesStand.fields[index]['type']) {
          name = imageStand['name'];
          break;
        }
      }

      control.push(this.createStandImagesParameters(this.imagesStand.fields[index], name));
      this.companyForm.get('stand').get('images').get([index]).disable();
    }
  }

  private createStandImagesParameters(image, name = '') {
    return this.formBuilder.group({
      name: [name],
      type: [image.folder]
    })
  }

  private createGalleryParameters(name) {
    return this.formBuilder.group({
      name: [name]
    });
  }

  private createProfileParameters(title, description) {
    return this.formBuilder.group({
      title: [title],
      description: [description]
    });
  }

  private createSocialMediaParameters(link, name) {
    return this.formBuilder.group({
      link: [link],
      name: [name]
    });
  }

  private createDocumentParameters(title, link, name) {
    return this.formBuilder.group({
      title: [title],
      link: [link],
      name: [name]
    });
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

  uploadFiles(data) {
    const { formData, type, id } = data;
    this.companyService.uploadFile(formData, type)
      .subscribe(
        response => {
          this.companyForm.get('document').get([id]).get('name').setValue(response.name);
          this.companyForm.get('document').get([id]).get('link').setValue(response.link);
        },
        error => {
          this.resetInputFile(error.message, id);
          this.notificationService.error(
            error.message
              ? error.message
              : this.errorMessageFile
          );
        }
      );
  }

  resetInputFile(error, key) {
    this.uploadError[key] = error;
    key = parseInt(key, 10);
    this.companyForm.get('document').get([key]).get('name').setValue('');
  }

  uploadImage(data, field, formsControl: AbstractControl) {
    const { formData } = data;
    formData.append('folder', field['folder']);
    field['error'] = '';
    field['loading'] = true;
    field['source'] = '';
    this.companyService.uploadFile(formData, 'images')
      .subscribe(
        response => {
          if (field['folder'] === 'logo') {
            formsControl.setValue(response.link);
          } else {
            formsControl.setValue(response.name);
          }
          field['source'] = response.link;
          // Realiza el preview del canvas
          if (typeof this.drawCanvasLibrary !== 'undefined' && field['from'] === 'stand') {
            this.drawCanvasLibrary.setImageStands(field['folder'], response.link)
          }
          field['loading'] = false;
        },
        error => {
          field['loading'] = false;
          this.resetInputImage('', field, formsControl);
          this.notificationService.error(
            error.message
              ? error.message
              : this.errorMessageFile
          );
        }
      );
  }

  resetInputImage(error, field, formsControl: AbstractControl) {
    formsControl.setValue('');
    field['error'] = error;
    field['source'] = '';
  }

  getSelectedCategory(category: string) {
    this.controlsForm['industry_id'].disable();
    this.controlsForm['industry_id'].setValue('');
    this.controlsForm['industry_name'].setValue('');
    this.industries = [];
    this.resetDocumentNumber(category);
    if (category !== '') {
      this.toggleOfferType(category);
      this.toggleIndustry(category);
    }
  }

  private resetDocumentNumber(category: string) {
    this.controlsForm['document_number'].setValue('');
    this.controlsForm['trade_name'].setValue('');
    this.controlsForm['business_name'].setValue('');
    this.resetInputImage('', this.imageLogo.fields[0], this.controlsForm['logo']);
    if (category !== '') {
      this.controlsForm['document_number'].enable();
    } else {
      this.controlsForm['document_number'].disable();
    }
  }

  private toggleIndustry(value: string) {
    this.industryService.getIndustries(value).subscribe(
      data => {
        this.industries = data;
        this.controlsForm['industry_id'].enable();
      },
      error => {
        this.notificationService.error('Error', 'Intente de nuevo.');
      }
    );
  }

  private toggleOfferType(value: string) {
    if (value === 'Educacion') {
      this.controlsForm['offer_type'].enable();
    } else {
      this.controlsForm['offer_type'].setValue('');
      this.controlsForm['offer_type'].disable();
    }
  }

  getSelectedIndustry(value) {
    this.controlsForm['industry_name'].setValue(value);
  }

  onChangeTypeStand(type_stand) {
    this.resetAllStandsImage();
    if (type_stand !== '') {
      this.standService.getStandData(type_stand)
        .subscribe(
          data => {
            this.currentStandList = data.list;
            this.enableStandControlsDepends(data.rules);
            if (this.drawCanvasLibrary) {
              this.drawCanvasLibrary.cleanCache();
            }
          },
          error => {
            this.notificationService.error('Error', error.message);
          });
    }
  }

  resetAllStandsImage() {
    this.controlsForm['model_id'].setValue('');
    this.controlsForm['amphitryon'].setValue('');
    this.controlsForm['video'].setValue('');

    this.controlsForm['model_id'].disable();
    this.controlsForm['amphitryon'].disable();
    this.controlsForm['color_1'].disable();
    this.controlsForm['color_2'].disable();
    this.controlsForm['video'].disable();

    this.imagesStand.fields.map((element, index) => {
      let imageControl, field;
      field = this.imagesStand.fields[index];
      imageControl = this.controlsForm['images'].get([index]).get(field['controlName']);

      this.resetInputImage('', field, imageControl);

      this.controlsForm['images'].get([index]).disable();
      field['disabled'] = true;
    });
  }

  enableStandControlsDepends(rules) {
    this.controlsForm['model_id'].enable();
    this.controlsForm['amphitryon'].enable();
    this.controlsForm['color_1'].enable();
    this.controlsForm['color_2'].enable();

    if (rules['video']) {
      this.controlsForm['video'].enable();
      if (rules['video'].required) {
        this.controlsForm['video'].setValidators(Validators.required)
      }
    }
    // TODO: refact algorithm
    Object.keys(rules).forEach((key) => {
      for (const index in this.imagesStand.fields) {
        if (this.imagesStand.fields[index]['folder'] === key) {
          this.controlsForm['images'].get([index]).enable();
          this.imagesStand.fields[index]['disabled'] = false;
          break;
        }
      }
    });
  }

  fitImageSource(collection, images: Array<any>) {
    collection.fields.map((element, index) => {
      element['source'] = images[index].link;
    });
  };

  // Busca los datos de la empresa mediante el RUC
  searchDataCompany() {
    if (!this.controlsForm['document_number'].errors) {
      const ruc = this.controlsForm['document_number'].value;
      const category = this.controlsForm['category'].value;
      this.isSendingDocument = true;
      this.companyService.getDataCompany(ruc, category)
        .subscribe(
          response => {
            this.isSendingDocument = false;
            if (response.data.trade_name === '' || response.data.business_name === '') {
              const message = 'Existen campos vacíos. Complete estos campos en el adminitrador de Aptitus.';
              this.notificationService.error(message);
              this.controlsForm['trade_name'].setValue('');
              this.controlsForm['business_name'].setValue('');
              this.controlsForm['logo'].setValue('');
              this.imageLogo.fields[0].source = '';
            } else {
              this.controlsForm['trade_name'].setValue(response.data.trade_name);
              this.controlsForm['business_name'].setValue(response.data.business_name);
              this.controlsForm['slug'].setValue(response.data.slug);
              this.controlsForm['logo'].setValue(response.data.logo);
              this.imageLogo.fields[0].source = response.data.logo;
              this.notificationService.success(response.message);
            }
          },
          error => {
            this.controlsForm['trade_name'].setValue('');
            this.controlsForm['business_name'].setValue('');
            this.isSendingDocument = false;
            this.notificationService.error(error.message);
          }
        );
    } else {
      this.controlsForm['trade_name'].setValue('');
      this.controlsForm['business_name'].setValue('');
    }
  }

  addProfileTemplate(title = '', description = '') {
    (<FormArray>this.companyForm.controls['profile']).push(this.createProfileParameters(title, description));
  }

  addSocialNetworkTemplate(link = '', name = '') {
    (<FormArray>this.companyForm.controls['social_media']).push(this.createSocialMediaParameters(link, name));
  }

  addDocumentTemplate(title = '', link = '', name = '') {
    (<FormArray>this.companyForm.controls['document']).push(this.createDocumentParameters(title, link, name));
  }

  removeTemplate(control: string, i: number) {
    (<FormArray>this.companyForm.controls[control]).removeAt(i);
  }

  addTemplateImageGallery(name = '', link = '') {
    let template;
    (<FormArray>this.companyForm.controls['image_gallery']).push(this.createGalleryParameters(name));
    template = {
      'folder': 'gallery',
      'controlName': 'name'
    };
    Object.assign(template, this.imageObjectTemplate());
    template['source'] = link;
    this.imagesGallery['fields'].push(template);
  }

  removeTemplateImageGallery(index: number) {
    this.imagesGallery['fields'].splice(index, 1);
    this.removeTemplate('image_gallery', index);
  }

  /* TODO: Revisar validación
  validateInputCoordinates() {
    const longitude = this.companyForm.value['latitude'];
    const latitude = this.companyForm.value['longitude'];
    // validar que unos de los campos esten llenos y mandar la data
    if (longitude.length > 0 || latitude.length > 0) {
      return true;
    }
    return false
  }
  */

  onBlurTinyMCE(text, i) {
    this.companyForm.controls['profile'].get([i]).get('description').setValue(text);
  }

  loadCanvasStands(event) {
    if (event.target.value === '') { return }
    this.companyService.getStandModels(event.target.value)
      .subscribe(
        response => {
          let colors;
          colors = [this.controlsForm['color_1'].value, this.controlsForm['color_2'].value];
          this.drawCanvasLibrary.buildStand(colors, response.data);
        },
        error => {
          this.notificationService.error(error.message);
        }
      );
  }

  loadCanvasAmphitryon(event) {
    if (event.target.value === '') { return }
    this.companyService.getStandAmphitryon(event.target.value)
      .subscribe(
        response => {
          this.drawCanvasLibrary.setAmphitryon(response.data.image);
        },
        error => {
          this.notificationService.error(error.message);
        }
      );
  }

  onChangeColor($event, key) {
    if (this.drawCanvasLibrary) {
      let colors;
      colors = [this.controlsForm['color_1'].value, this.controlsForm['color_2'].value];
      this.drawCanvasLibrary.setCurrentColor(colors);
    }
    this.controlsForm[key].setValue($event)
  }

  submitCompany() {
    this.isSending = true;
    if (this.isEdit) {
      this.companyService.editCompany(this.companyForm.value, this.route.snapshot.params['id'], this.route.snapshot.params['category'])
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
      this.companyService.saveCompany(this.companyForm.value)
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

  redirectCompany() {
    // TODO: debe ser submitted (preguntar a victor)
    if (this.redirect) {
      this.router.navigate(['/empresas']);
    }
  }

  cancelCompany() {
    // TODO: debe ser submitted (preguntar a victor)
    this.router.navigate(['/empresas']);
  }

  formIsValid() {
    let isStandValid;
    isStandValid = true;
    for (const image of this.imagesStand.fields) {
      if (!image['disabled'] && image['source'] === '') {
        isStandValid = false;
        break;
      }
    }
    return !this.companyForm.valid || !isStandValid;
  }
}
