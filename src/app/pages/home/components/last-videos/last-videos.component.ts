import { Component, OnInit } from '@angular/core';
import { Youtube } from '@core/models/youtube';
import { YoutubeService } from '@shared/services/youtube.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-last-videos',
  templateUrl: './last-videos.component.html',
  styleUrls: ['./last-videos.component.scss'],
})
export class LastVideosComponent implements OnInit {
  lastVideos: Youtube[];
  lastVideos$: Observable<Youtube[]>;

  constructor(private youtubeService: YoutubeService) {
    this.lastVideos = [];
    this.lastVideos$ = new Observable();
  }

  ngOnInit(): void {
    this.lastVideos$ = this.youtubeService.getLastVideos();
    this.youtubeService.getLastVideos().subscribe(
      (response) => (this.lastVideos = response),
      (error) => console.log(error)
    );
  }
}
