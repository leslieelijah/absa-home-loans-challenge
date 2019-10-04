import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedApiService {

  constructor() { }

  public getSeriesAndMovies(): Observable<any> {

    const url: any = require('./sample.json');

    return url;

  }
}
