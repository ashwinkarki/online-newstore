import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:CartItem[]=[];
  totalPrice:Subject<number>=new Subject<number>();
  totalQuantity:Subject<number>=new Subject<number>();

  constructor() { }

  addToCart(theCartItem:CartItem){
    console.log(theCartItem);
      //check whetther item exists in cart or not
      let alreadyExistsInCart:boolean=false;
      let existingCartItem:CartItem=undefined;

      if(this.cartItems.length>0){
        //find the item in cart based on id
      existingCartItem= this.cartItems.find(tempcartItem => tempcartItem.id===theCartItem.id);
      alreadyExistsInCart=(existingCartItem!=undefined);
    }

        if(alreadyExistsInCart){
          //increment the quantity
          existingCartItem.quantity++;
        }else{
          this.cartItems.push(theCartItem);
        }


      this.calculateTotalPrice();
  }


  calculateTotalPrice(){
        //total price and quantity
       let totalPriceValue:number=0;
       let totalQuantityValue:number=0;
      console.log(this.cartItems);
       //calculate total price and qunatity
       for(let currentCartItem of this.cartItems){
    
           totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
           totalQuantityValue += +currentCartItem.quantity*1;
       }

       console.log(`total price ${totalPriceValue} totalquantity ${totalQuantityValue}`);

       //puvlish the events using subject

       this.totalPrice.next(totalPriceValue);
       this.totalQuantity.next(totalQuantityValue);
  }
}
