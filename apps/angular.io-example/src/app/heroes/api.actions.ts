import {createAction, props} from "@ngrx/store";
import {Hero} from "../hero";

export const heroesFetched = createAction(
  '[Hero API] heroes fetched',
  props<{ heroes: Hero[]}>()
);

export const heroesFetchedSuccess = createAction(
  '[Hero API] heroes fetched success',
  props<{ heroes: Hero[]}>()
);

export const heroesFetchedError = createAction(
  '[Hero API] heroes fetched error'
);
