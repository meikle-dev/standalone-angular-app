import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatFacts } from 'src/app/core/app-state/app.actions';
import { selectFact, selectLoading } from 'src/app/core/app-state/app.selectors';
import { AppState } from 'src/app/core/app-state/app.state';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.scss']
})
export class HomeContainer implements OnInit {
  constructor(
    private store: Store<AppState>
  ) {}

  fact$ = this.store.selectSignal(selectFact);
  loading$ = this.store.selectSignal(selectLoading);

  ngOnInit(): void {
    this.store.dispatch(CatFacts.getCatFact());
  }

}
