import { Component, OnInit } from '@angular/core';
import { Youtube } from '@core/models/youtube';
import { YoutubeService } from '@shared/services/youtube.service';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-last-videos',
  templateUrl: './last-videos.component.html',
  styleUrls: ['./last-videos.component.scss'],
})
export class LastVideosComponent implements OnInit {
  lastVideos: Youtube[];
  lastVideos$: Observable<Youtube[]>;
  isLoading: boolean;
  error: string;

  constructor(private youtubeService: YoutubeService) {
    this.lastVideos = [];
    this.lastVideos$ = new Observable();
    this.error = '';
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.lastVideos$ = this.youtubeService.getLastVideos().pipe(
      tap((_) => (this.isLoading = true)),
      catchError((error) => {
        this.error = error.message;
        return throwError(error.message);
      }),
      finalize(() => {
        // se agrego apra retrarazar un poquis el loader
        setTimeout(() => (this.isLoading = false), 1000);
      })
    );
  }
}
