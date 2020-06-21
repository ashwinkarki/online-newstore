import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl="http://localhost:8080/api/v1/books";
  private categoryUrl="http://localhost:8080/api/v1/book-category";

  constructor(private httpClient:HttpClient) { }

  getBooks(theCategoryId:number,currentPage:number,pageSize:number):Observable<GetResponseBook>{
    const searchURL=`${this.baseUrl}/search/categoryid?id=${theCategoryId}&page=${currentPage}&size=${pageSize}`;
   
    return this.httpClient.get<GetResponseBook>(searchURL);
  }



  private getBookList(searchURL: string): Observable<Book[]> {
    return this.httpClient.get<GetResponseBook>(searchURL).pipe(map(response => response._embedded.books));
  }

  getBookCategories():Observable<BookCategory[]>{
    return this.httpClient.get<GetResponseBookCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.bookCategory)
    );
  }

//for searching books
  searchBooks(keyword:string):Observable<Book[]>{
    const searchURL=`${this.baseUrl}/search/searchbykeyword?xyz=${keyword}`;
  return this.getBookList(searchURL);

  }

//getting single book
get(bookId:number):Observable<Book>{
    const bookdetailUrl=`${this.baseUrl}/${bookId}`;
  return  this.httpClient.get<Book>(bookdetailUrl);
}
}




interface GetResponseBook{
  _embedded:{
    books :Book[];
  },
  page: {
    //no of record in eachpage
    size: number,
    //total no of receord in db
    totalElements: number,
    //total no of pages whcih starts from 0
    totalPages: number,
    number: number
    }
}


interface GetResponseBookCategory{
  _embedded:{
    bookCategory :BookCategory[];
  }
}

