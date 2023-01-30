import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
//import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements AfterViewInit {
  constructor() {}

  // UseCase of @ViewChild
  @ViewChild('input') inputRef!: ElementRef;
  @ViewChild('enteredData') enteredData!: ElementRef;

  ngAfterViewInit() {
    this.enteredData.nativeElement.value = this.inputRef.nativeElement.value;
  }
}
