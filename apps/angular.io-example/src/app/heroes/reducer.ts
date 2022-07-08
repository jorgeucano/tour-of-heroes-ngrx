import {Hero} from "../hero";
import {Action, createReducer, on} from "@ngrx/store";

// con mock data
// import {HEROES} from "../mock-heroes";
// import * as heroesListActions from './actions';

import * as apiActions from './api.actions';


export interface GlobalState {
  hero: HeroState;
}

interface HeroState {
  heroes?: Hero[];
}

const initState: HeroState = {
  heroes: undefined
}

// con mock data
/*const heroesReducer = createReducer(
  initState,
  on(heroesListActions.heroesOpened, state => ({
    ...state,
    heroes: [...HEROES]
  }))
);*/

const heroesReducer = createReducer(
  initState,
  on(apiActions.heroesFetchedSuccess, (state, { heroes}) => ({
    heroes: [...heroes]
  }))
)

export function reducer(state: HeroState | undefined, action: Action) {
  return heroesReducer(state, action)
}
