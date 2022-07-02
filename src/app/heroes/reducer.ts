import {Hero} from "../hero";
import {Action} from "@ngrx/store";
import {HEROES} from "../mock-heroes";

interface HeroState {
  heroes: Hero[];
}

const initState: HeroState = {
  heroes: HEROES
}

export function reducer(
  state: HeroState = initState,
  action: Action
) {
  return state;
}
