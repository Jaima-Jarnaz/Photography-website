import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './atoms/icon/icon.component';
import { TextComponent } from './atoms/text/text.component';
import { InputComponent } from './atoms/input/input.component';
import { ButtonComponent } from './atoms/button/button.component';
import { ImageCardComponent } from './molecules/image-card/image-card.component';
import { HeadingComponent } from './atoms/heading/heading.component';



@NgModule({
  declarations: [
    IconComponent,
    TextComponent,
    InputComponent,
    ButtonComponent,
    ImageCardComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent,
    TextComponent,
    InputComponent,
    ButtonComponent,
    ImageCardComponent,
    HeadingComponent
  ]
})
export class ComponentsModule { }
