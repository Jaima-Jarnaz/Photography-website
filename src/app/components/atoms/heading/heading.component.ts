import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ComponentsService, modifiersType } from '../../components.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {
  constructor(private componentsService: ComponentsService) {}

  @Input() tag: modifiersType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = 'h1';
  @HostBinding('class') get classes(): string {
    return this.componentsService.getClasses('a-heading', this.tag);
  }
  ngOnInit(): void {}
}
