import { Component, Output, EventEmitter } from '@angular/core';
import { IHotel } from './hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'hw2-adv';

  public selectedHotel: IHotel;

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
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
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
    }
  ];

  ngOnInit(): void {
    this.selectedHotel = this.hotels[0];
  }


  public onRowClick(i: number): void {
    this.selectedHotel = this.hotels[i];
  }
}
