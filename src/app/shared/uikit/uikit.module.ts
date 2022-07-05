import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { CardComponent } from './components/card/card.component';
import { CardAggiungiComponent } from './components/card-aggiungi/card-aggiungi.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { CheckButtonComponent } from './components/check-button/check-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { ColorSelectComponent } from './components/color-select/color-select.component';
import { LottieModule } from 'ngx-lottie';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { GradientLoaderComponent } from './components/gradient-loader/gradient-loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';
import { SmLoaderComponent } from './components/sm-loader/sm-loader.component';
import { ImgLoaderComponent } from './components/img-loader/img-loader.component';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    RoundButtonComponent,
    CardComponent,
    CardAggiungiComponent,
    TextareaComponent,
    CheckButtonComponent,
    SmLoaderComponent,
    CheckButtonComponent,
    ToastComponent,
    ColorSelectComponent,
    TooltipComponent,
    CheckboxComponent,
    GradientLoaderComponent,
    ModalComponent,
    ButtonLogoutComponent,
    ImgLoaderComponent,

  ],
  imports: [
    NgxPermissionsModule,
    CommonModule,
    ReactiveFormsModule,
    LottieModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ButtonLogoutComponent,
    RoundButtonComponent,
    CardComponent,
    CardAggiungiComponent,
    TextareaComponent,
    CheckButtonComponent,
    SmLoaderComponent,
    CheckButtonComponent,
    ToastComponent,
    ColorSelectComponent,
    TooltipComponent,
    CheckboxComponent,
    GradientLoaderComponent,
    ModalComponent,
    ImgLoaderComponent,

    

  ]
})
export class UikitModule { }
