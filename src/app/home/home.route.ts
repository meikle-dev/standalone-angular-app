import { Routes } from '@angular/router';

export const HomeRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./containers/home/home.container')
        .then(m => m.HomeContainer)
      },
  ];