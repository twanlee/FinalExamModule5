import {Component, OnInit} from '@angular/core';
import {BookServiceService} from '../../../services/book-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../../interfaces/book';

@Component({
  selector: 'app-book-editing',
  templateUrl: './book-editing.component.html',
  styleUrls: ['./book-editing.component.css']
})
export class BookEditingComponent implements OnInit {
  id = +this.AcRouter.snapshot.paramMap.get('id');
  editBook: Book;
  editBookForm: FormGroup;

  constructor(private bookService: BookServiceService,
              private AcRouter: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById() {
    this.editBookForm = this.fb.group(
      {
        id: ['', Validators.required],
        title: ['', Validators.required],
        author: ['', Validators.required],
        description: ['', Validators.required]
      }
    );

    console.log(this.id);
    this.bookService.getBookById(this.id).subscribe((data) => {
      this.editBook = data;
      this.editBookForm.patchValue(this.editBook);
    });
  }

  update() {
    const book = this.editBookForm.value;
    this.bookService.updateBook(this.editBook.id, book).subscribe(
      data => {
        // this.editBookForm.reset('');
        alert('Done');
      },
      err => {
        alert(err);
      }
    );
    this.router.navigate(['/']);
    console.log(book);
  }

}
