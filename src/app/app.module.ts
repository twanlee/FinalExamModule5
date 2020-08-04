import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import {HttpClientModule} from '@angular/common/http';
import { BookEditingComponent } from './components/books/book-editing/book-editing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { BookAddingComponent } from './components/books/book-adding/book-adding.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookEditingComponent,
    BookDetailComponent,
    BookAddingComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
