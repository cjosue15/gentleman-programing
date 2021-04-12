import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './home.component';
import { LastVideosComponent } from './components/last-videos/last-videos.component';
import { YoutubeIframeModule } from '@shared/components/youtube-iframe/youtube-iframe.module';

@NgModule({
  declarations: [PeopleComponent, HomeComponent, LastVideosComponent],
  imports: [CommonModule, HomeRoutingModule, YoutubeIframeModule],
  exports: [PeopleComponent],
  providers: [],
})
export class HomeModule {}
