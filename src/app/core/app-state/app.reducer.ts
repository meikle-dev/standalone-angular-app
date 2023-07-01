import { createFeature, createReducer, on } from '@ngrx/store';
import { initialState } from './app.state';
export const appFeatureKey = 'app';
export const app = createReducer(
  initialState
);

export const sharedFeature = createFeature({
  name: appFeatureKey,
  reducer: app,
});
