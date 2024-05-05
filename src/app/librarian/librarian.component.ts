import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Librarian } from './librarian';

@Component({
  selector: 'app-librarian',
  standalone: true,
  imports: [],
  templateUrl: './librarian.component.html',
  styleUrl: './librarian.component.css'
})
export class LibrarianComponent implements OnInit{
  public librarian: Librarian[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.http.get<Librarian[]>(environment.baseUrl + 'api/Books').subscribe(
      {
        next: result => this.librarian = result,
        error: error => console.error(error)
      }

    );
  }
}