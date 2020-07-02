import { Billingaddress } from './billingaddress';
import {Creditcart} from './creditcart';
import {Shippingaddress} from './shippingaddress';

export class Finalcart {

    billingAddress:Billingaddress;
    creditCard:Creditcart;
    shippingAddress:Shippingaddress;


    constructor(billingAdd:Billingaddress,credit:Creditcart,
        shippingAdd:Shippingaddress){
            this.billingAddress=billingAdd;
            this.creditCard=credit;
            this.shippingAddress=shippingAdd;

    }

}
