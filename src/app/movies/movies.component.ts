import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pages-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() public moviesFeed: any;

  public moviesList: any;

  constructor() { }

  ngOnInit() {
    this.moviesList = this.moviesFeed.entries.map((item: any) => {
      return item;
    });
  }

}
