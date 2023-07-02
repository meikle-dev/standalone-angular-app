import { createFeature, createReducer, on } from '@ngrx/store';
import { CatFacts } from './app.actions';
import { initialState } from './app.state';
export const appFeatureKey = 'app';
export const app = createReducer(
  initialState,
  on(CatFacts.getCatFact, (state) => ({
    ...state,
    loading: true
  })),
  on(CatFacts.getCatFactSuccess, (state, action) => ({
    ...state,
    fact: action.fact,
    loading: false,
    
  })),
  on(CatFacts.getCatFactError, (state) => ({ ...state, loading: false })),
);

export const sharedFeature = createFeature({
  name: appFeatureKey,
  reducer: app,
});
