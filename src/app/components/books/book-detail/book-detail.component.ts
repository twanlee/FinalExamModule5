import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookServiceService} from '../../../services/book-service.service';
import {Book} from '../../../interfaces/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookDetail: Book;
  id = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookServiceService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getBookDetail();
  }

  getBookDetail() {
    this.bookService.getBookById(this.id).subscribe((data) => {
      this.bookDetail = data;
    });
  }
  delete(id: number) {
    if (confirm('Bạn chắc chưa?')) {
      this.bookService.deleteBookById(id).subscribe(() => {
        this.route.navigate(['/']);
      });
    }
  }
}
