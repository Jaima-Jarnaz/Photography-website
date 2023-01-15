import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
