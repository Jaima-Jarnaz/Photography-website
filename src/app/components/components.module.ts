import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './atoms/icon/icon.component';
import { TextComponent } from './atoms/text/text.component';
import { InputComponent } from './atoms/input/input.component';
import { ButtonComponent } from './atoms/button/button.component';



@NgModule({
  declarations: [
    IconComponent,
    TextComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent,
    TextComponent,
    InputComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
