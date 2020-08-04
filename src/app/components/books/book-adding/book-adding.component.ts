import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookServiceService} from '../../../services/book-service.service';
import {Book} from '../../../interfaces/book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-adding',
  templateUrl: './book-adding.component.html',
  styleUrls: ['./book-adding.component.css']
})
export class BookAddingComponent implements OnInit {
  addBookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookServiceService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    this.addBookForm = this.fb.group(
      {
        title: ['', Validators.required],
        author: ['', Validators.required],
        description: ['', Validators.required],
      }
    );
  }

  addBook() {
    console.log(this.addBookForm.value)
    console.log(this.addBookForm.valid)
    if (this.addBookForm.valid) {
      const book = this.addBookForm.value;
      this.bookService.addBook(book).subscribe(() => {
        // this.addBookForm.reset('');
        this.route.navigate(['/']);
        alert('Done!');
      });
    }
  }

}
