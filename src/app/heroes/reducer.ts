import {Hero} from "../hero";
import {Action, createReducer, on} from "@ngrx/store";
import {HEROES} from "../mock-heroes";

import * as hereosListActions from './actions';

interface HeroState {
  heroes?: Hero[];
}

const initState: HeroState = {
  heroes: undefined
}

const heroesReducer = createReducer(
  initState,
  on(hereosListActions.heroesOpened, state => ({
    ...state,
    heroes: [...HEROES]
  }))
);

export function reducer(state: HeroState | undefined, action: Action) {
  return heroesReducer(state, action)
}
