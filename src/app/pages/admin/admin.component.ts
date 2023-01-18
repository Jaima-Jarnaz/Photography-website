import { Component, OnInit } from '@angular/core';
// import { img1 } from '../../../assets/images/image-1.jpeg';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  // img1 = img1;
  title = 'hello world';
  description = 'hello world344';

  ngOnInit(): void {}

  onChangeHandler(event: Event) {
    console.log(event);
  }
}
