import { Billingaddress } from './billingaddress';
import { CartItem } from './cart-item';
import { Creditcart } from './creditcard';
import { Shippingaddress } from './shippingaddress';

export class Finalcart {

    billingAddress:Billingaddress;
    creditCard:Creditcart;
    shippingAddress:Shippingaddress;
    cartItem:Array<CartItem>;


    constructor(billingAdd:Billingaddress,credit:Creditcart,
        shippingAdd:Shippingaddress,cartI:Array<CartItem>){
            this.billingAddress=billingAdd;
            this.creditCard=credit;
            this.shippingAddress=shippingAdd;
            this.cartItem=cartI;
    }

}
