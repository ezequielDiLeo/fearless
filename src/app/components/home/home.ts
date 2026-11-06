import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { AboutUS } from '../about-us/about-us';
import { Team } from '../team/team';
import { Giftcard } from '../giftcard/giftcard';
import { Reviews } from '../reviews/reviews';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBar,
    AboutUS,
    Team,
    Giftcard,
    Reviews,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  videoFailed = false;

  async ngAfterViewInit(): Promise<void> {
    const video = this.bgVideo.nativeElement;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');

    try {
      await video.play();
    } catch (error) {
      console.error('Error al reproducir el video:', error);
    }
  }

  onVideoError(): void {
    this.videoFailed = true;
    console.error('Error al cargar el video.');
  }

}
