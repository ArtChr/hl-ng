import { Component, Output, EventEmitter } from '@angular/core';
import { IHotel } from './hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'hw2';

  public hotel: IHotel = {
    id: 0,
    title: 'Universal Cabana',
    address: 'Orlando',
    description: 'Best one!',
    phone: '+3242353434',
    picture: 'assets/images/1.jpg',
    photos: [
      'assets/images/res.jpg',
      'assets/images/r1.jpg'
    ],
    weather: {
      temperature: 12,
      water: 11,
      icon: 'sun'
    },
    profile: {
      followers: 112,
      following: 11,
      photo: 'assets/images/b1.jpg'
    },
    stars: 3
  }
}
