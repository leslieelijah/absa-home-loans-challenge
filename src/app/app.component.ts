import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedApiService } from './service/feed-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DEMO Streaming';
  public seriesAndMovies: any;

  constructor(private feedApiService: FeedApiService) { }

  ngOnInit() {

    this.seriesAndMovies = this.feedApiService.getSeriesAndMovies();

    console.log(this.seriesAndMovies.entries.map((enteries) => {
        return enteries;
    }));
  }

}
