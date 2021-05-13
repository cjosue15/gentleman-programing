import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  finalize,
  switchMap,
  tap,
} from 'rxjs/operators';
import { YoutubeService } from '@shared/services/youtube.service';
import { Observable, throwError } from 'rxjs';
import { Youtube } from '../../core/models/youtube';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  searchInput: FormControl;
  videos$: Observable<Youtube[]>;
  isLoading: boolean;
  constructor(private youtubeService: YoutubeService) {
    this.searchInput = new FormControl();
    this.videos$ = new Observable();
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.videos$ = this.searchInput.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged(),
      tap(() => (this.isLoading = true)),
      switchMap((query: string) =>
        this.youtubeService.getVideosBySearch(query).pipe(
          catchError((error) => {
            console.log(error);
            return throwError(error.message);
          }),
          finalize(() => (this.isLoading = false))
        )
      )
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
