import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { Finalcart } from 'src/app/common/finalcart';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  checkoutFormGroup: FormGroup;
   finalCart:Finalcart;

  constructor(private formBuilder: FormBuilder,private _cartService: CartService,
    private _bookService:BookService) { }

 
  ngOnInit() {
    this.cartDetails();
    this.checkoutFormGroup = this.formBuilder.group({
      shippingAddress: this.formBuilder.group({
        street: ['',Validators.required],
        city: ['',Validators.required],
        state: ['',Validators.required],
        country: ['',Validators.required],
        zipcode: ['',Validators.required]
      }),
      billingAddress: this.formBuilder.group({
        street: ['',Validators.required],
        city: ['',Validators.required],
        state: ['',Validators.required],
        country: ['',Validators.required],
        zipcode: ['',Validators.required]
      }),
      creditCard: this.formBuilder.group({
        cardType: ['',Validators.required],
        nameOnCard: ['',Validators.required],
        cardNumber: ['',Validators.required],
        cvv: ['',Validators.required],
        expirationMonth: ['',Validators.required],
        expirationYear: ['',Validators.required]
      })
    })

    //console.log(this.checkoutFormGroup);
  }

  cartDetails(){
    this.cartItems = this._cartService.cartItems;

    this._cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this._cartService.calculateTotalPrice();
  }

  onSubmit() {
    if (this.checkoutFormGroup.invalid) {
      return;
  }
  console.log(this.cartItems);
//  console.log(this.checkoutFormGroup.value.billingAddress);
    //console.log(this.checkoutFormGroup.value);
     console.log('Purchase the books');
   // console.log(this.checkoutFormGroup.get('customer').value);
  //  console.log("Emial is", this.checkoutFormGroup.get('customer').value.email); 
   let finalCart=new Finalcart(this.checkoutFormGroup.value.billingAddress,
    this.checkoutFormGroup.value.shippingAddress, this.checkoutFormGroup.value.creditCard);
    
    console.log('finalcart is',finalCart);
    this._bookService.addFinalCart(this.finalCart);
  }

  copyShippingAddressToBillingAddress(event) {

    if (event.target.checked) {
      this.checkoutFormGroup.controls.billingAddress
        .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    }else {
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
    
  }
}
