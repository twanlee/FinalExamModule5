import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  url = 'http://localhost:3000/books/';

  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.url + id);
  }

  updateBook(id: number, book: Partial<Book>): Observable<Book> {
    return this.http.put<Book>(this.url + id, book);
  }

  deleteBookById(id: number) {
    return this.http.delete(this.url + id);
  }
  addBook( data: Book): Observable<Book>{
    return  this.http.post<Book>(this.url, data);
  }

}
