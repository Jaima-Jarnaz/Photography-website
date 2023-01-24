import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ComponentsService, modifiersType } from '../../components.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  constructor(private componentsService: ComponentsService) {}

  @Input() order?: modifiersType<'order'>;

  @Input() imgSrc!: string;
  @Input() title: string = ''; // Required value so assign as empty
  @Input() description!: string;
  @Input() alt?: string;
  @HostBinding('class') get classes(): string {
    return this.componentsService.getClasses('m-image-card', this.order);
  }

  ngOnInit(): void {}
}
