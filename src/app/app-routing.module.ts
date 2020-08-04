import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './components/books/book-list/book-list.component';
import {BookEditingComponent} from './components/books/book-editing/book-editing.component';
import {BookDetailComponent} from './components/books/book-detail/book-detail.component';
import {BookAddingComponent} from './components/books/book-adding/book-adding.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: ':id/edit',
    component: BookEditingComponent
  },
  {
    path: ':id/book',
    component: BookDetailComponent
  },
  {
    path: 'add',
    component: BookAddingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
