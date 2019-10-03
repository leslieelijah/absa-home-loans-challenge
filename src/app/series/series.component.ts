import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  @Input() public seriesFeed: any;

  public seriesList: any;

  constructor() { }

  ngOnInit() {

    this.seriesList = this.seriesFeed.entries.map((item: any) => {
      return item;
    });
    console.log(this.seriesList);
  }

}
