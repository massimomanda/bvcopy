import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkRoutingModule } from './link-routing.module';
import { LinkComponent } from './link.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    LinkComponent
  ],
  imports: [
    CommonModule,
    LinkRoutingModule,
    UikitModule,
    NgxPermissionsModule
  ]
})
export class LinkModule { }
