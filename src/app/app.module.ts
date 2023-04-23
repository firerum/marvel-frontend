import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormStyle } from '@angular/common';

import { AppComponent } from './app.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MarvelComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
