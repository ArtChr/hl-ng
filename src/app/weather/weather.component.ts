import { Component, Input } from '@angular/core';
import { IWeather } from '../hotel';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() public weather: IWeather;
}
