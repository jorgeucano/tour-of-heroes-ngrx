import {Injectable} from "@angular/core";
import {createEffect, ofType, Actions} from "@ngrx/effects";
import {map, exhaustMap, tap} from "rxjs/operators";

import {HeroService} from "../hero.service";
import * as heroesListActions from './actions';
import * as apiActions from './api.actions';



@Injectable()
export class HeroEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly heroService: HeroService
  ) { }

  fetchHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroesListActions.heroesOpened),
      exhaustMap(() =>
        this.heroService
          .getHeroes()
          .pipe(map(heroes => apiActions.heroesFetched({heroes})))
      )
    )
  );

}
