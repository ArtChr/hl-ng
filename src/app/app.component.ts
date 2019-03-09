import { Component } from '@angular/core';
import { IHotel } from './hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'hw2';
  public hotels: IHotel[] = [
    {
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
    },
    {
      id: 1,
      title: 'Cabana #2',
      address: 'Florida',
      description: 'Good price',
      phone: '+3123456789',
      picture: 'assets/images/res.jpg',
      photos: [
        'assets/images/r1.jpg',
        'assets/images/res.jpg'
      ],
      weather: {
        temperature: 20,
        water: 17,
        icon: 'sun'
      },
      profile: {
        followers: 574,
        following: 164,
        photo: 'assets/images/r1.jpg'
      },
      stars: 4
    },
    {
      id: 2,
      title: 'Cabana Universal',
      address: 'Detroit',
      description: 'Good price',
      phone: '+380123456789',
      picture: 'assets/images/res.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather: {
        temperature: 7,
        water: 5,
        icon: 'sun'
      },
      profile: {
        followers: 1,
        following: 8,
        photo: 'assets/images/1.jpg'
      },
      stars: 4
    }
  ];

  public currentHotel: IHotel = this.hotels[0];

  public selectHotel(i: number): void {
    this.currentHotel = this.hotels[i];
  }
}
