import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input()
  public followers: number;

  @Input()
  public following: number;

  @Input()
  public photo: string;


  constructor() { }

  ngOnInit() {
  }

}
