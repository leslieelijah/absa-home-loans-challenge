import { Component, OnInit, Input } from '@angular/core';
import { FeedApiService } from '../service/feed-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public moviesFeed: any;
  public moviesList: any;

  constructor(private feed: FeedApiService) { }

  ngOnInit() {

    this.moviesList = this.feed.getSeriesAndMovies();

    this.moviesFeed = this.moviesList.entries.map((item: any) => {
      return item;
    });
    console.log(this.moviesFeed);
    console.log(this.moviesFeed.map((x) => {
      if (x.programType === 'movie' && x.length > 21) {
        return x.title;
        }
     }));
  }

}
