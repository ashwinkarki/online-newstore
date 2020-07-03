import { Billingaddress } from './billingaddress';
import {Creditcart} from './creditcart';
import {Shippingaddress} from './shippingaddress';
import { CartItem } from './cart-item';

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
