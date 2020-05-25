import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';
import { CompaniesService } from '../../services/companies.service';
import { CompanyList } from 'app/models/companyList';
import { OPTIONS_NOTIFICATION } from 'app/app.constans';

@Component({
  templateUrl: 'companies.component.html',
  styleUrls: ['companies.component.css'],
})

export class CompaniesComponent implements OnInit {

  companies: CompanyList[];
  currentCompany: any;
  isTableDisplayed: boolean;
  isVisibleModal: boolean;
  isButtonDisabled: boolean;
  menuItems: any[];
  optNotification: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompaniesService,
    private notificationService: NotificationsService
  ) {
    this.companies = [];
    this.isTableDisplayed = false;
    this.currentCompany = {};
    this.optNotification = OPTIONS_NOTIFICATION;

    this.menuItems = [
      // #0
      {
        functionToCall: 'goToEditCompany',
        element: {
          title: 'Editar Empresa',
          icon: 'g-icon-edit',
          text: 'Editar Empresa'
        }
      },
      // #1
      {
        functionToCall: 'deleteCompany',
        element: {
          title: 'Eliminar Empresa',
          icon: 'g-icon-membership',
          text: 'Eliminar'
        }
      }
    ];
  }

  private searchCompaniesService() {
    this.companyService.getCompanyList()
      .subscribe(
        data => {
          this.companies = data;
          this.isTableDisplayed = true;
        },
        error => {
          this.isTableDisplayed = false;
          this.notificationService.error('Error', 'Intente de nuevo.');
        });
  }

  buildFunctionConnector(key: string, currentCompany: CompanyList) {
    const { id } = currentCompany;
    let { category } = currentCompany;
    category = category.replace(/ó/gi, 'o');
    switch (key) {
      case 'goToEditCompany':
        this.router.navigate([category, id, 'editar'], { relativeTo: this.route });
        break;
      case 'deleteCompany':
        this.currentCompany = currentCompany;
        this.isVisibleModal = true;
        break;
    }
  }

  buildMenuItems() {
    return this.menuItems;
  }

  deleteCompany(id, category) {
    this.isButtonDisabled = true;
    this.companyService.deleteCompany(id, category)
      .subscribe(
        () => {
          this.notificationService.success('Éxito', 'Se ha eliminado la empresa satisfactoriamente.');
          this.searchCompaniesService();
        },
        error => this.notificationService.error('Error', error),
        () => {
          this.isVisibleModal = false;
          this.isButtonDisabled = false;
        }
      )
  }

  ngOnInit() {
    this.searchCompaniesService();
  }
}
