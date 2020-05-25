import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { SponsorsService } from '../../services/sponsors.service';
import { SponsorList } from 'app/models/sponsorList';
import { OPTIONS_NOTIFICATION } from 'app/app.constans';

@Component({
  templateUrl: 'sponsors.component.html',
  styleUrls: ['sponsors.component.css'],
})

export class SponsorsComponent implements OnInit {

  sponsors: SponsorList[];
  currentSponsor: any;
  isTableDisplayed: boolean;
  isVisibleModal: boolean;
  isButtonDisabled: boolean;
  menuItems: any[];
  optNotification: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sponsorsService: SponsorsService,
    private notificationService: NotificationsService
  ) {
    this.sponsors = [];
    this.isTableDisplayed = false;
    this.currentSponsor = {};
    this.optNotification = OPTIONS_NOTIFICATION;

    this.menuItems = [
      // #0
      {
        functionToCall: 'goToEditSponsor',
        element: {
          title: 'Editar Patrocinador',
          icon: 'g-icon-edit',
          text: 'Editar Patrocinador'
        }
      },
      // #1
      {
        functionToCall: 'deleteSponsor',
        element: {
          title: 'Eliminar Patrocinador',
          icon: 'g-icon-membership',
          text: 'Eliminar'
        }
      }
    ];
  }

  private searchSponsorsService() {
    this.sponsorsService.getSponsorList()
      .subscribe(
        data => {
          this.sponsors = data;
          this.isTableDisplayed = true;
        },
        error => {
          this.isTableDisplayed = false;
          this.notificationService.error('Error', 'Intente de nuevo.');
        });
  }

  buildFunctionConnector(key: string, currentSponsor: SponsorList) {
    const { id } = currentSponsor;
    let { category } = currentSponsor;
    category = category.replace(/ó/gi, 'o');
    switch (key) {
      case 'goToEditSponsor':
        this.router.navigate([category, id, 'editar'], { relativeTo: this.route });
        break;
      case 'deleteSponsor':
        this.currentSponsor = currentSponsor;
        this.isVisibleModal = true;
        break;
    }
  }

  buildMenuItems() {
    return this.menuItems;
  }

  deleteSponsor(id) {
    this.isButtonDisabled = true;
    this.sponsorsService.deleteSponsor(id)
      .subscribe(
        () => {
          this.notificationService.success('Éxito', 'Se ha eliminado el patrocinador satisfactoriamente.');
          this.searchSponsorsService();
        },
        error => this.notificationService.error('Error', error),
        () => {
          this.isVisibleModal = false;
          this.isButtonDisabled = false;
        }
      )
  }

  ngOnInit() {
    this.searchSponsorsService();
  }
}
