import {Component, OnInit} from '@angular/core';
import {Book} from '../../../interfaces/book';
import {BookServiceService} from '../../../services/book-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[];

  constructor(private bookService: BookServiceService,
  ) {
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  delete(id: number) {
    if (confirm('Bạn chắc chưa?')) {
      this.bookService.deleteBookById(id).subscribe(() => {
        this.getAllBook();
      });
    }
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe((data) => {
      this.bookList = data;
    });
  }
}
