import { Component, OnInit, Input } from '@angular/core';
import { FeedApiService } from '../service/feed-api.service';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public moviesFeed: any = [];
  public moviesList: any = [];

  constructor(private feedService: FeedApiService) { }

  ngOnInit() {

    this.moviesList = this.feedService.getFeed().subscribe(
      (movies) => {
       return this.moviesFeed = movies.entries, this.moviesFeed.sort();
      },
      shareReplay(1)
    );
  }
}
