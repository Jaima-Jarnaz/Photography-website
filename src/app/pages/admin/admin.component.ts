import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { InputComponent } from 'src/app/components/atoms/input/input.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {}

  //UseCase of @viewChild decorator with child component
  @ViewChild(InputComponent) inputRef!: InputComponent;

  ngAfterViewInit() {
    console.log('from admin', this.inputRef);
  }

  onChangeHandler(event: Event) {
    console.log(event);
  }
}
