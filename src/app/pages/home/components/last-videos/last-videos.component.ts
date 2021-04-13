import { Component, OnInit } from '@angular/core';
import { Youtube } from '@core/models/youtube';
import { YoutubeService } from '@shared/services/youtube.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-last-videos',
  templateUrl: './last-videos.component.html',
  styleUrls: ['./last-videos.component.scss'],
})
export class LastVideosComponent implements OnInit {
  lastVideos: Youtube[];
  lastVideos$: Observable<Youtube[]>;
  error: string;

  constructor(private youtubeService: YoutubeService) {
    this.lastVideos = [];
    this.lastVideos$ = new Observable();
    this.error = '';
  }

  ngOnInit(): void {
    this.lastVideos$ = this.youtubeService.getLastVideos().pipe(
      catchError((error) => {
        this.error = error.message;
        return throwError(error.message);
      })
    );
  }
}
