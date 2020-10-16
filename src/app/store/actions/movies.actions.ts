import { createAction, props } from "@ngrx/store";
import { IMovie } from '../../interfaces/ICarterlera-Response';

export const GETMOVIES = createAction('[Movies] Load Movies')
export const GETMOVIESSUCCESS = createAction(
    '[Movies] Movies Loaded Success',
    props<{movies:IMovie[]}>());
export const GETMOVIESERROR =  createAction(
  '[Movies] Movies Loaded Error',
    props<{payload:any}>()
);