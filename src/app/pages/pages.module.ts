import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [AdminComponent, HomeComponent, PracticeComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
