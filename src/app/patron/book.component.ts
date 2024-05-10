import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from './book';
import { environment } from '../../environments/environment.development';
import {MatTableModule} from '@angular/material/table';
import { Observable, map, tap } from 'rxjs';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  public book: any;
  id: number;

  public displayedColumns: string[] = ["bookId","bookIsbn13", "bookIsbn10", "bookTitle", "bookAuthor", "bookPublisher", "bookPublishYear", "bookGenre"];
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {this.id=-1}

  ngOnInit() {
    this.getBook();
    }

 getBook() {
  let idParam = this.activatedRoute.snapshot.paramMap.get("id");
  this.id = idParam ? +idParam : -1;
  this.http.get(`${environment.baseUrl}api/Books/${this.id}`)
  .subscribe((res: any) => {
    console.log(res);
    this.book = res;
  }
    );
  }

}
