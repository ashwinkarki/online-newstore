import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { BookService } from 'src/app/service/book.service';
import { Finalcart } from 'src/app/common/finalcart';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-checkoutsuccessful',
  templateUrl: './checkoutsuccessful.component.html',
  styleUrls: ['./checkoutsuccessful.component.css']
})
export class CheckoutsuccessfulComponent implements OnInit {

  orderedId:number;
  dataInCart:Finalcart;
  cartItems:Array<CartItem>;
  totalPrice:number=0;
  totalQuantity:number=0;
  dataSaved:boolean=false;

  constructor(private _activatedRouter:ActivatedRoute,private _bookService:BookService) { }

  ngOnInit(): void {
    const id:number=+this._activatedRouter.snapshot.paramMap.get('id');
   
         this.orderedId=id;
    this.dataInCart=this._bookService.finalSavedCart;
    console.log(this.dataInCart);
    this.cartItems=this.dataInCart.cartItem;
      console.log(this.cartItems);
    this.cartItems.forEach(item =>{
      this.totalPrice +=item.quantity * item.unitPrice;
    });

    this.cartItems.forEach(item =>{
      this.totalQuantity +=item.quantity;
    });
  
}
}
