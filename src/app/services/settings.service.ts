import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private sidebar: Element | null;
  private boxes!: NodeListOf<Element>;

  constructor() {
    this.sidebar = document.querySelector('.main-sidebar');
  }

  checkInitTheme(): void {
    this.sidebar = document.querySelector('.main-sidebar');

    const theme =
      localStorage.getItem('theme') ||
      'main-sidebar sidebar-dark-primary elevation-4';

    this.sidebar?.removeAttribute('class');
    this.sidebar?.setAttribute('class', theme);
  }

  changeTheme(typeTheme: string, color: string): void {
    const theme = `main-sidebar ${typeTheme}-${color} elevation-4`;

    this.sidebar?.removeAttribute('class');

    this.sidebar?.setAttribute('class', theme);

    localStorage.setItem('theme', theme);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    this.boxes = document.querySelectorAll('.color-box');

    const localTheme = localStorage.getItem('theme');

    this.boxes.forEach((box) => {
      box.classList.remove('working');

      const boxTheme = box.getAttribute('data-theme') ?? '';

      if (localTheme?.includes(boxTheme)) {
        box.classList.add('working');
      }
    });
  }
}
