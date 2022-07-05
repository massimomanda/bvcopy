import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpostazioniRoutingModule } from './impostazioni-routing.module';
import { ImpostazioniComponent } from './impostazioni.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    ImpostazioniComponent
  ],
  imports: [
    CommonModule,
    ImpostazioniRoutingModule,
    UikitModule,
    NgxPermissionsModule
  ]
})
export class ImpostazioniModule { }
