import { Component, OnInit, Input } from '@angular/core';
import { FeedApiService } from '../service/feed-api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  public seriesAndMovies: any;

  public seriesFeed: any;

  constructor(private feed: FeedApiService) { }

  ngOnInit() {
    this.seriesAndMovies = this.feed.getSeriesAndMovies();
    this.seriesFeed = this.seriesAndMovies.entries.map((item: any) => {
      return item;
    });
    console.log(this.seriesFeed);
  }

}
