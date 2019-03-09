import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../hotel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input()
  public hotels: IHotel[];

  @Input()
  public currentHotel: IHotel;

  @Output()
  public hotelSelected: EventEmitter<IHotel> = new EventEmitter();

  public selectHotel(hotelSelected: IHotel): void {
    this.hotelSelected.emit(hotelSelected);
  }
}
