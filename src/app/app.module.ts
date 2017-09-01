import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TodosComponent }  from './todos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent , TodosComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
