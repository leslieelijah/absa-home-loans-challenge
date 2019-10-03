import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedApiService } from './service/feed-api.service';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SeriesComponent,
    MoviesComponent,
    FooterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [FeedApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
