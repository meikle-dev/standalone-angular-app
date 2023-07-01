import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { app } from '../app-state/app.reducer';
import { AppEffects } from '../app-state/app.effects';
export const NgrxProviders = [
  provideStore(
    { app: app },
    {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }
  ),
  provideStoreDevtools(),
  provideState('app', app),
  provideEffects([AppEffects])
];
