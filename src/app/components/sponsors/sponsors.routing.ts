import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorsComponent } from './sponsors.component';
import { SponsorAddComponent } from './sponsor-add/sponsor-add.component';

const sponsorsRoute: Routes = [
  {
    path: '',
    component: SponsorsComponent
  },
  {
    path: 'agregar',
    component: SponsorAddComponent
  },
  {
    path: ':category/:id/editar',
    component: SponsorAddComponent,
    data: { isEdit: true }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(sponsorsRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class SponsorsRoutingModule { }
