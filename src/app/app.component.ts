import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducers';
import { IMovie } from './interfaces/ICarterlera-Response';
import { GETMOVIES } from './store/actions';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: IMovie[] = [];
  loading: boolean = false;
  error:any
 
  constructor(private store: Store<AppState>) {}
 
  ngOnInit() {
    this.store.select('movies').subscribe(({movies,loading,error})=>{
      this.movies = movies;
      this.loading = loading;
      this.error = error;
    })
    this.store.dispatch(GETMOVIES());
  }
}