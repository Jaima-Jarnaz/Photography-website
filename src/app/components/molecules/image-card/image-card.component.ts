import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input()
  imgSrc!: string;

  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input() alt?: string;
  @HostBinding('class') classes: string = 'm-image-card';

  constructor() {}
  ngOnInit(): void {}
}
