import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import {NgbPaginationConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-book-list',
 /* templateUrl: './book-list.component.html', */
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books :Book[]=[];
  currentCategoryId:number=1;
  searchMode:boolean=false;
  previousCategory:number=1;


  //new codes for server side paging
  currentPage:number=1;
  pageSize:number=5;
  totalRecords:number=0;
 
  //items = [];
  constructor(private bookService:BookService,private _activatedRoute:ActivatedRoute,
    _config:NgbPaginationConfig) { 
        _config.maxSize=3;
        _config.boundaryLinks=true;
  }

  ngOnInit(): void {
   // this.listBooks();
   this._activatedRoute.paramMap.subscribe(() => {
        this.listBooks();
      })

   
  }

//pagnation


//update page size
updatePageSize(pageSize:number){
  this.currentPage=1;
  this.pageSize=pageSize;
     // console.log(pageSize);
       this.listBooks();
 }
 


  listBooks(){
    this.searchMode =this._activatedRoute.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      //do search books
      this.handleSearchBooks();
    }
    else{
      //dispaly book based on cateogory
      this.handleListBooks();
    }
  }

  /* books :Book[]=[{
    sku: "text-100",
    name: "Python for SAS Users",
    description: "Business users familiar with Base SAS programming can now learn Python by example. You will learn via examples that map SAS programming constructs and coding patterns into their Python equivalents.",
    unitPrice: 600,
    imageUrl: "assets/images/webdevelopment/text-100.jpg",
    active: true,
    unitsInStock: 100,
    createdOn: new Date(),
    updatedOn: null,
  },
  {
    sku: "text-101",
    name: "Deep Learning with JavaScript",
    description: "Deep learning has transformed the fields of computer vision, image processing, and natural language applications.",
    unitPrice: 500,
    imageUrl: "assets/images/webdevelopment/text-101.jpg",
    active: true,
    unitsInStock: 100,
    createdOn: new Date(),
    updatedOn: null,
  },
  {
    sku: "text-102",
    name: "Clean Ruby",
    description: "Learn how to make better decisions and write cleaner Ruby code. This book shows you how to avoid messy code that is hard to test",
    unitPrice: 700,
    imageUrl: "assets/images/webdevelopment/text-102.jpg",
    active: true,
    unitsInStock: 100,
    createdOn: new Date(),
    updatedOn: null,
  }]; */
  handleListBooks(){
      
    const hasCategoryId:boolean=  this._activatedRoute.snapshot.paramMap.has('id');

    if(hasCategoryId){
     this.currentCategoryId= +this._activatedRoute.snapshot.paramMap.get('id');
    }
    else{
      this.currentCategoryId=1;
    }

      //setting up to page no as 1 if user navigate to diff category
     if(this.previousCategory != this.currentCategoryId){
      this.currentPage=1;
    } 

    this.previousCategory=this.currentCategoryId;

    this.bookService.getBooks(this.currentCategoryId
      ,this.currentPage-1,this.pageSize).subscribe(this.processPaginate())
  }

  processPaginate(){
    return data =>  {
     // console.log(data);
      this.books=data._embedded.books;
      //pageno starts from 1index
      this.currentPage=data.page.number+1;
      this.totalRecords=data.page.totalElements;
      this.pageSize=data.page.size;
    }
  }

  handleSearchBooks(){
       const keyword:string= this._activatedRoute.snapshot.paramMap.get('keyword');
       this.bookService.searchBooks(keyword,this.currentPage-1,this.pageSize).subscribe(
       this.processPaginate())
  }
}
