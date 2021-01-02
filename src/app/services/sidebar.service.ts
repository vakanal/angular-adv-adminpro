import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { title: 'Principal', url: '/dashboard' },
        { title: 'Gráficas', url: 'grafica1' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Promesas', url: 'promesas' },
        { title: 'RxJs', url: 'rxjs' },
      ],
    },
    {
      title: 'Account Settings',
      icon: 'nav-icon fas fa-th-large',
      url: 'account-settings',
    },
    {
      title: 'Logout',
      icon: 'nav-icon fas fa-sign-out-alt',
      url: '/login',
    },
  ];

  constructor() {}
}
