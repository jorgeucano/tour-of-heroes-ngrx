import {Injectable} from "@angular/core";
import {createEffect, ofType, Actions} from "@ngrx/effects";
import {map, exhaustMap, tap, catchError} from "rxjs/operators";

import {HeroService} from "../hero.service";
import * as heroesListActions from './actions';
import * as apiActions from './api.actions';
import {of} from "rxjs";
import {MessageService} from "../message.service";



@Injectable()
export class HeroEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly heroService: HeroService,
    private readonly messageService: MessageService
  ) { }

  fetchHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroesListActions.heroesOpened),
      exhaustMap(() =>
        this.heroService
          .getHeroes()
          .pipe(
            map(heroes => apiActions.heroesFetchedSuccess({heroes})),
            catchError(() => of(apiActions.heroesFetchedError()))
          )
      )
    )
  );

  handleFetchError$ = createEffect( () =>
    this.actions$.pipe(
      ofType(apiActions.heroesFetchedError),
      tap(() => {
        this.messageService.add(`HeroService: Error fetching heroes`);
      })
    ),
    {dispatch: false}
  );

}
