import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './home.component';
import { YoutubeIframeModule } from '@shared/components/youtube-iframe/youtube-iframe.module';
import { LastVideosModule } from '@shared/components/last-videos/last-videos.component.module';

@NgModule({
  declarations: [PeopleComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    YoutubeIframeModule,
    LastVideosModule,
  ],
  exports: [PeopleComponent],
  providers: [],
})
export class HomeModule {}
