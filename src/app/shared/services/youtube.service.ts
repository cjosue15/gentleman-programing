import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Youtube } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://www.googleapis.com/youtube/v3/search';
  }

  getLastVideos(): Observable<Youtube[]> {
    const params: {
      [param: string]: string | string[];
    } = {
      key: environment.apiKeyYoutube,
      channelId: environment.channelId,
      part: 'snippet,id',
      order: 'date',
      maxResults: '4',
    };

    return this.getVideos(params);
  }

  getVideosBySearch(query: string): Observable<Youtube[]> {
    const params: {
      [param: string]: string | string[];
    } = {
      key: environment.apiKeyYoutube,
      channelId: environment.channelId,
      part: 'snippet,id',
      order: 'date',
      maxResults: `${query.trim().length > 0 ? 10 : 0}`,
      q: query,
    };
    return this.getVideos(params);
  }

  getVideos(params: {
    [param: string]: string | string[];
  }): Observable<Youtube[]> {
    return this.http.get(this.url, { params }).pipe(
      first(),
      map((response: any) => {
        const videos = response.items.map(
          (video: any): Youtube => ({
            videoId: video.id.videoId,
            channelId: video.snippet.channelId,
            description: video.snippet.description,
            title: video.snippet.title,
          })
        );
        return videos;
      })
    );
  }
}
