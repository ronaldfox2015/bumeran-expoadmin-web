import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { SharedModule } from 'app/all/components/share.module';
import { CompaniesRoutingModule } from 'app/components/companies/companies.routing';
import { CompaniesComponent } from 'app/components/companies/companies.component';
import { CompaniesService } from 'app/services/companies.service';
import { StandService } from '../../services/stand.service';
import { CompanyAddComponent } from './company-add/company-add.component';
import { InputVideoDirective } from '../../all/directives/input-video.directive';
import { tinyMCEDirective } from '../../all/directives/tinymce.directive';
import { IndustryService } from 'app/services/industry.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CompaniesRoutingModule,
    ColorPickerModule
  ],
  declarations: [
    InputVideoDirective,
    tinyMCEDirective,
    CompaniesComponent,
    CompanyAddComponent,
  ],
  providers: [
    CompaniesService,
    StandService,
    IndustryService
  ]
})
export class CompaniesModule { }
