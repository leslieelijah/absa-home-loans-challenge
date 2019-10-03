import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedApiService } from '../service/feed-api.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {

  @Input() public seriesAndMovies: any;

  constructor() {}

  ngOnInit() {
    // this.seriesAndMovies;
    console.log(this.seriesAndMovies);
  }

}
