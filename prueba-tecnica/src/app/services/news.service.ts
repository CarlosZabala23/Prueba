import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, PopularCoNews } from '../interfaces/main';
import { map } from 'rxjs/operators';

const apiNewsKey=environment.apiNewsKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getPopular():Observable<Article[]> {
    return this.http.get<PopularCoNews>(`https://newsapi.org/v2/top-headlines?country=co&category=business`,{
      params:{
        apiKey:apiNewsKey
      }
    }).pipe(
      map(({articles})=> articles)
    );
  }

}
