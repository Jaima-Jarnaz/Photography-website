import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements AfterViewInit {
  @Input() placeholder?: string;
  @Input() type?: string;
  @Input() label?: string;
  @Input() name?: string;

  @Input() required?: boolean;
  @Input() id?: string;
  @Input() onChangeHandler?: (event: Event) => void;
  @HostBinding('class') classes: string = 'a-input';

  //UseCase of @viewChild decorator with DOM Elements
  @ViewChild('inputRef') inputRef!: ElementRef;
  @ViewChild('dataRef') data!: ElementRef;

  ngAfterViewInit() {
    var content = this.inputRef.nativeElement.value;
    console.log(content);
    this.data.nativeElement.value = content;
  }

  constructor() {}

  ngOnInit(): void {}

  onChange(event: Event): void {
    this.onChangeHandler && this.onChangeHandler(event);
  }
}
