import {
  Component,
  OnInit,
  HostBinding,
  ContentChild,
  ElementRef,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @HostBinding('class') classes: string = 'a-container';

  constructor() {}

  //useCase of contentChild
  @ContentChild('inputFileRef')
  inputFromChildRef2!: ElementRef<HTMLInputElement>;

  ngAfterContentInit(): void {
    const { nativeElement } = this.inputFromChildRef2;
    nativeElement.style.display = 'none';

    nativeElement.addEventListener('change', function (e) {
      const data = e.target as HTMLInputElement;

      console.log(data.files);
    });
  }

  openFile() {
    this.inputFromChildRef2.nativeElement.click();
  }

  ngOnInit(): void {}
}
