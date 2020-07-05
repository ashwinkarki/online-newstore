import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkoutsuccessful',
  templateUrl: './checkoutsuccessful.component.html',
  styleUrls: ['./checkoutsuccessful.component.css']
})
export class CheckoutsuccessfulComponent implements OnInit {

  orderedId:number;

  constructor(private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const id:number=+this._activatedRouter.snapshot.paramMap.get('id');
    this.orderedId=id;
  }

}
