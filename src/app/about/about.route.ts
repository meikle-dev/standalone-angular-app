import { Routes } from '@angular/router';

export const AboutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./containers/about/about.container')
        .then(m => m.AboutContainer)
      },
  ];