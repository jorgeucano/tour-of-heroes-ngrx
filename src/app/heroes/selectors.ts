import {GlobalState} from "./reducer";

export const getHeroes = (state: GlobalState) => state.hero.heroes;
