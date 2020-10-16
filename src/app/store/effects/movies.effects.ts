import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as moviesActions from '../actions/movies.actions';

import { MoviesService } from '../../services/movies.service';
 
@Injectable()
export class MoviesEffects {
 
 getMovies$ = createEffect(() => this.actions$.pipe(
    ofType(moviesActions.GETMOVIES),
    mergeMap(() => this.moviesService.getMovies()
      .pipe(
        map(movies =>  (moviesActions.GETMOVIESSUCCESS({movies}))),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}