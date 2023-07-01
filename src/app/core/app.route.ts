import { ENVIRONMENT_INITIALIZER, importProvidersFrom } from '@angular/core';
import {provideRouter,Routes,withRouterConfig} from '@angular/router';

const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../home/home.route').then((m) => m.HomeRoutes),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../about/about.route').then((m) => m.AboutRoutes),
  }
];

// eslint-disable-next-line @typescript-eslint/no-empty-function
const appFactory = () => () => {

};

export const AppRouteProviders = [
  provideRouter(
    AppRoutes,
    withRouterConfig({
      paramsInheritanceStrategy: 'always'
    })
  ),
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: appFactory
  },
];
