import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() placeholder?: string;
  @Input() type?: string;
  @Input() label?: string;
  @Input() name?: string;
  @Input() required?: boolean;
  @Input() id?: string;
  @Input() onChangeHandler?: (event: Event) => void;
  @HostBinding('class') classes: string = 'a-input';

  constructor() {}

  ngOnInit(): void {}

  onChange(event: Event): void {
    this.onChangeHandler && this.onChangeHandler(event);
  }
}
