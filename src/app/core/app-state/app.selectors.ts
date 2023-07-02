
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState} from '../app-state/app.state';
import * as reducer from './app.reducer';

export const selectSharedState = createFeatureSelector<AppState>(reducer.appFeatureKey);

export const selectLoading = createSelector(
    selectSharedState,
    (state: AppState) => state.loading
  )
  
  export const selectFact = createSelector(
    selectSharedState,
    (state: AppState) => state.fact
  )