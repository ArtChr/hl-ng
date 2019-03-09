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
  public hotelSelected: EventEmitter<number> = new EventEmitter();

  public selectHotel(i: number): void {
    this.hotelSelected.emit(i);
  }
}
