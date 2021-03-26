import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ResultsComponent } from './results/results.component';
import { GetNumbersComponent } from './get-numbers/get-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    ResultsComponent,
    GetNumbersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
