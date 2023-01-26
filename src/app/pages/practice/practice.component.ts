import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
  AfterContentInit,
  TemplateRef,
} from '@angular/core';
//import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements AfterViewInit, AfterContentInit {
  constructor() {}
  @ViewChild('input') inputRef!: ElementRef;
  @ViewChild('enteredData') enteredData!: ElementRef;

  @ViewChild('inputFileRef')
  inputFromChildRef!: ElementRef<HTMLInputElement>;

  @ContentChild('inputFileRef')
  inputFromChildRef2!: ElementRef<HTMLInputElement>;

  ngAfterContentInit(): void {
    const data = this.inputFromChildRef2;
    console.log('from ngContent', data);
    // nativeElement.style.display = 'none';
  }

  ngAfterViewInit() {
    const data = this.inputFromChildRef;
    console.log('from ngView', data);
    this.enteredData.nativeElement.value = this.inputRef.nativeElement.value;
  }
}
