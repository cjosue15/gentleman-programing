import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    const params = {
      key: environment.apiKeyYoutube,
      channelId: environment.channelId,
      part: 'snippet',
      order: 'date',
      maxResults: '4',
    };

    return this.http.get(this.url, { params }).pipe(
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
