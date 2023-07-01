import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/core/app.component';
import { AppRouteProviders } from './app/core/app.route';
import { GlobalProviders } from './app/core/providers/global.providers';
import { HttpProviders } from './app/core/providers/http.providers';
import { NgrxProviders } from './app/core/providers/ngrx.providers';
bootstrapApplication(AppComponent, {
  providers: [
    ...AppRouteProviders, //Provides base routing
    ...NgrxProviders, //Provides base (app) state
    ...HttpProviders, //Provides http client and interceptors
    ...GlobalProviders
  ],
});
