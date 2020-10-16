import { createReducer, on } from '@ngrx/store';
import { GETMOVIES, GETMOVIESSUCCESS, GETMOVIESERROR } from '../actions';

import { IMovie } from '../../interfaces/ICarterlera-Response';

export interface MoviesState  {
  movies : IMovie[],
  loaded : boolean,
  loading : boolean,
  error : any
};

export const moviesInitialState:MoviesState = {
  movies: [],
  loaded : false,
  loading : false,
  error : null
}
const _moviesReducer = createReducer(moviesInitialState,
  on(GETMOVIES,state => ({...state, loading:true})),
  on (GETMOVIESSUCCESS,(state, { movies }) => ({
    ...state,
    loading:true,
    loaded:true,
    movies:[...movies]
  })),
  on(GETMOVIESERROR,(state, { payload })=> ({
    ...state,
    loading: false,
    loaded:false,
    error:{
      url: payload.url,
      name: payload.name,
      message:payload.message
    }
  }))
  )

  export function moviesReducer (state,action){
    return _moviesReducer(state,action)
  }
