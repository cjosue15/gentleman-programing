import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-iframe',
  templateUrl: './youtube-iframe.component.html',
  styleUrls: ['./youtube-iframe.component.scss'],
})
export class YoutubeIframeComponent implements OnInit {
  @Input() title: string;
  @Input() videoId: string;
  @Input() width: string;
  @Input() height: string;

  constructor() {
    this.title = '';
    this.videoId = '';
    this.width = '100%';
    this.height = '300';
  }

  ngOnInit(): void {}
}
