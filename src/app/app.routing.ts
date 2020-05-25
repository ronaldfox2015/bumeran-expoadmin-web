import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from 'app/all/guards/user.guards';
import { LayoutComponent } from './all/components/layout/layout.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'empresas', component: LayoutComponent, canActivate: [LoggedInGuard], children: [
      { path: '', loadChildren: './components/companies/companies.module#CompaniesModule', canLoad: [LoggedInGuard] }
    ]
  },
  {
    path: 'patrocinadores', component: LayoutComponent, canActivate: [LoggedInGuard], children: [
      { path: '', loadChildren: './components/sponsors/sponsors.module#SponsorsModule', canLoad: [LoggedInGuard] }
    ]
  },
  { path: '', redirectTo: '/empresas', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
