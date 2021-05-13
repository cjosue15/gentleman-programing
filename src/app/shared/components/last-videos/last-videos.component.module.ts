import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastVideosComponent } from './last-videos.component';
import { YoutubeIframeModule } from '../youtube-iframe/youtube-iframe.module';

@NgModule({
  declarations: [LastVideosComponent],
  imports: [CommonModule, YoutubeIframeModule],
  exports: [LastVideosComponent],
  providers: [],
})
export class LastVideosModule {}
