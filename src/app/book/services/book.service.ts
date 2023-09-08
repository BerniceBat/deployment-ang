import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

 
  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/books`);
  }


  getBook(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/books/${id}`);
  }

  createBook(book: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/books`, book);
  }


  updateBook(id: number, book: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/books/${id}`, book);
  }


  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/books/${id}`);
  }
}
