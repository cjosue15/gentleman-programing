import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeIframeComponent } from './youtube-iframe.component';
import { DomSanitizerPipeModule } from '../../pipes/dom-sanitizer/dom-sanitizer.module';

@NgModule({
  declarations: [YoutubeIframeComponent],
  exports: [YoutubeIframeComponent],
  imports: [CommonModule, DomSanitizerPipeModule],
})
export class YoutubeIframeModule {}
