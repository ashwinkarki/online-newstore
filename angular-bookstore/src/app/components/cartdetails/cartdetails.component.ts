import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CartItem } from 'src/app/common/cart-item';
import { createSocket } from 'dgram';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {


  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;


  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.cartDetails();
  }

  cartDetails(){
    this.cartItems = this._cartService.cartItems;
  //  console.log('fron cart details');
    console.log(this.cartItems);
    this._cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this._cartService.calculateTotalPrice();
  }


  incrementQuantity(cartItem: CartItem){
    this._cartService.addToCart(cartItem);
  }

  decrementQuantity(cartItem: CartItem){
    this._cartService.decrementQuantity(cartItem);
  }

  remove(cartItem: CartItem){
    this._cartService.remove(cartItem);
  }
}
