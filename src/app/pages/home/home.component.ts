import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  CARD_DATA: any = [
    {
      title: 'Science',
      imgSrc: '../../../assets/images/bg-1.png',
      description:
        'Push yourself, because no one else is going to do it for you',
    },
    {
      title: 'Technology',
      imgSrc: '../../../assets/images/bg-2.png',
      description: 'Let me go with my own flow',
    },
  ];

  ngOnInit(): void {}
}
