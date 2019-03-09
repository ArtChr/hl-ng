import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from '../hotel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() public profile: IProfile;
}
