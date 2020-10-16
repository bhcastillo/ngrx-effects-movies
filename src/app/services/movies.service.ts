import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarteleraResponse, IMovie } from '../interfaces/ICarterlera-Response';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URI = 'https://api.themoviedb.org/3/movie/now_playing?api_key=0ac47a5510487229328556d7a15a4249&language=en-US&page=1';
  constructor(private http:HttpClient) {
   }

  getMovies():Observable<IMovie[]>{
    return this.http.get<ICarteleraResponse>(this.URI).pipe(
      map((res)=> res['results'])
    );
  }
}
