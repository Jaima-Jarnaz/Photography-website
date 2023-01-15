import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ComponentsService, modifiersType } from '../../components.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() modifiers?: modifiersType<'primary' | 'secondary'>;
  @HostBinding('class') get classes(): string {
    return this.componentsService.getClasses('a-button', this.modifiers);
  }

  constructor(private componentsService: ComponentsService) {}
  ngOnInit(): void {}
}
