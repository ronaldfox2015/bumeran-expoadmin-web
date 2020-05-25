import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/all/components/share.module';
import { SponsorsRoutingModule } from 'app/components/sponsors/sponsors.routing';
import { SponsorsService } from 'app/services/sponsors.service';
import { InputFileDirective } from 'app/all/directives/input-file.directive';
import { SponsorAddComponent } from './sponsor-add/sponsor-add.component';
import { SponsorsComponent } from 'app/components/sponsors/sponsors.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SponsorsRoutingModule,
  ],
  declarations: [
    SponsorAddComponent,
    SponsorsComponent,
  ],
  providers: [
    SponsorsService,
  ]
})
export class SponsorsModule { }
