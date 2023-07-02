import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CatFact } from 'src/app/models/catFact';

export const CatFacts = createActionGroup({
  source: 'App',
  events: {
    'getCatFact': emptyProps(),
    'getCatFactSuccess': props<{fact: CatFact}>(),
    'getCatFactError':props<{error: string;}>()
  }
});

