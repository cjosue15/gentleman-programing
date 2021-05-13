import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VideosComponent } from './videos.component';
import { YoutubeIframeModule } from '@shared/components/youtube-iframe/youtube-iframe.module';
import { AsyncLoadingModule } from '../../shared/pipes/async-loading/async-loading.module';
import { LoadingModule } from '../../shared/components/loading/loading.module';

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    ReactiveFormsModule,
    YoutubeIframeModule,
    AsyncLoadingModule,
    LoadingModule,
  ],
  exports: [],
  providers: [],
})
export class VideosModule {}
