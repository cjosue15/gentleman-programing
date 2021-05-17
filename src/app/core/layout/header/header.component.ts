import { DOCUMENT } from '@angular/common';
import { environment } from '../../../../environments/environment.prod';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  @ViewChild('header') header: ElementRef;
  lastScrollTop = 0;
  discordUrl: String;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.discordUrl = environment.discordUrl;
    this.header = {} as ElementRef;
  }

  ngOnInit(): void {
    this.document.addEventListener('scroll', () => {
      const scrollTop = this.document.documentElement.scrollTop;

      if (scrollTop > this.lastScrollTop) {
        this.renderer.setStyle(this.header.nativeElement, 'top', '-90px');
      } else {
        this.renderer.setStyle(this.header.nativeElement, 'top', '0px');
      }

      this.lastScrollTop = scrollTop;
    });
  }

  openMenu() {
    this.isOpen = !this.isOpen;
    this.verifyIfMenuIsOpen();
  }

  verifyIfMenuIsOpen() {
    this.isOpen
      ? this.renderer.setStyle(this.document.body, 'overflow', 'hidden')
      : this.renderer.setStyle(this.document.body, 'overflow', 'visible');
  }
}
