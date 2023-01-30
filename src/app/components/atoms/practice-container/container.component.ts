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
  public imgSrc?: string = '';
  @HostBinding('class') classes: string = 'a-container';

  constructor() {}

  //useCase of contentChild
  @ContentChild('inputFileRef') //this template variable defined in practice component
  inputFromChildRef!: ElementRef<HTMLInputElement>;

  ngAfterContentInit(): void {
    const element = this.inputFromChildRef.nativeElement;
    element.style.display = 'none';

    element.addEventListener('change', (e) => {
      const data = <HTMLInputElement>e.target;

      this.previewImage(data);
    });
  }

  openFile() {
    this.inputFromChildRef.nativeElement.click();
  }

  private previewImage(inputRef: HTMLInputElement) {
    const file = inputRef.files?.item(0);
    const reader = new FileReader();

    reader.readAsDataURL(file as Blob);

    reader.addEventListener('load', (event) => {
      this.imgSrc = event.target?.result as string;
    });
  }

  ngOnInit(): void {}
}
