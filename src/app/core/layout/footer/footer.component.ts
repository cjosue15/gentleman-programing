import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  discordUrl: String;
  constructor() {
    this.discordUrl = environment.discordUrl;
  }

  ngOnInit(): void {}
}
