import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Patron } from './patron';

@Component({
  selector: 'app-patron',
  standalone: true,
  imports: [],
  templateUrl: './patron.component.html',
  styleUrl: './patron.component.css'
})
export class PatronComponent {
  public patron: Patron[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.http.get<Patron[]>(environment.baseUrl + 'api/Patron').subscribe(
      {
        next: result => this.patron = result,
        error: error => console.error(error)
      }

    );
  }
}