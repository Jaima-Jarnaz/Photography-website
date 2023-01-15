import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ComponentsService, modifiersType } from '../../components.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() fontSize?: modifiersType<'16' | '18'>;

  constructor(private componentsService: ComponentsService) {}

  @HostBinding('class') get classes(): string {
    return this.componentsService.getClasses('a-text', this.fontSize);
  }
  ngOnInit(): void {}
}
