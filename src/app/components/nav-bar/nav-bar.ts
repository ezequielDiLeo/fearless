
import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar implements OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);

  readonly isMenuOpen = signal<boolean>(false);
  readonly isScrolled = signal<boolean>(false);

  private readonly isBrowser = isPlatformBrowser(this.platformId);

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
    this.toggleBodyScroll();
  }

  closeMenu(): void {
    if (!this.isMenuOpen()) return;

    this.isMenuOpen.set(false);
    this.toggleBodyScroll();
  }

  private toggleBodyScroll(): void {
    if (!this.isBrowser) return;

    document.body.style.overflow = this.isMenuOpen()
      ? 'hidden'
      : '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isMenuOpen()) return;

    const target = event.target;

    if (!(target instanceof Element)) return;

    const clickedInsideMenu = target.closest('.mobile-menu');
    const clickedToggle = target.closest('.header__toggle');

    if (!clickedInsideMenu && !clickedToggle) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isBrowser) return;

    this.isScrolled.set(window.scrollY > 20);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }
}
