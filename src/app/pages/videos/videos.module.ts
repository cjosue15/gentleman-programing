import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VideosComponent } from './videos.component';
import { YoutubeIframeModule } from '@shared/components/youtube-iframe/youtube-iframe.module';
import { LoadingModule } from '@shared/components/loading/loading.module';
import { LastVideosModule } from '@shared/components/last-videos/last-videos.component.module';

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    ReactiveFormsModule,
    YoutubeIframeModule,
    LoadingModule,
    LastVideosModule,
  ],
  exports: [],
  providers: [],
})
export class VideosModule {}
