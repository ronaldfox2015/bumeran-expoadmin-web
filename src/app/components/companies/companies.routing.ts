import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';
import { CompanyAddComponent } from './company-add/company-add.component';

const companiesRoute: Routes = [
    {
        path: '',
        component: CompaniesComponent
    },
    {
        path: 'agregar',
        component: CompanyAddComponent
    },
    {
        path: ':category/:id/editar',
        component: CompanyAddComponent,
        data: {isEdit: true}
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(companiesRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class CompaniesRoutingModule {}
