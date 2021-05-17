import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  discordUrl: String;
  constructor() {
    this.discordUrl = environment.discordUrl;
  }

  ngOnInit(): void {}
}
