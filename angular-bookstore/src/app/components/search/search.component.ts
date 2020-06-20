import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  serachBooks(keyword:string){
      console.log(keyword);
      this._router.navigateByUrl('/search/'+keyword);
  }
}
