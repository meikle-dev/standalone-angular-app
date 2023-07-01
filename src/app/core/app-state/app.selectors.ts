
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState} from '../app-state/app.state';
import * as reducer from './app.reducer';

export const selectSharedState = createFeatureSelector<AppState>(reducer.appFeatureKey);

