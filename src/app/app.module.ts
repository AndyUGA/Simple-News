import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NewsDataComponent } from './news-data/news-data.component';
import {NewsDataService} from './news-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    NewsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
