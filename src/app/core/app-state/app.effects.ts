import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';
import { CatFacts } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private homeService: HomeService) {}

  getCatFact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatFacts.getCatFact),
      switchMap(() =>
        this.homeService.getCatFact().pipe(
          map((fact) => CatFacts.getCatFactSuccess({ fact: fact })),
          catchError((error) => of(CatFacts.getCatFactError({ error })))
        )
      )
    )
  );
  
}
