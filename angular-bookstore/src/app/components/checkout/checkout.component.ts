import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { Finalcart } from 'src/app/common/finalcart';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';

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
   router: Router;
  constructor(private _router: Router,private formBuilder: FormBuilder,private _cartService: CartService,
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
  this.finalCart=new Finalcart(this.checkoutFormGroup.value.billingAddress,
   this.checkoutFormGroup.value.creditCard, this.checkoutFormGroup.value.shippingAddress,  this.cartItems);
    
    console.log('finalcart is',this.finalCart);
    this._bookService.holdSavedData(this.finalCart);
    this._bookService.addFinalCart(this.finalCart).subscribe(
      (response) => {
      console.log(response);
      this._router.navigateByUrl(`/checkoutsuccess/${response.order_id}`);
      },
     (err)=>{
     console.log("Error",err); //======> In case of failure
     }
);
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
