import {createAction, props} from "@ngrx/store";
import {Hero} from "../hero";

export const heroesFetched = createAction(
  '[Hero API] heroes fetched',
  props<{ heroes: Hero[]}>()
)
