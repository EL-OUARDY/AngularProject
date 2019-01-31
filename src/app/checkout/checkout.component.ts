import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  shipping: IShipping = { name: '', addressLine1: '', addressLine2: '', phone: '', city: '' };
  shoppingCart;
  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.shoppingCart = this.cartService.Cart;
  }

  placeOrder() {
    console.log(this.shipping);
  }
}

export interface IShipping {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  phone: string;

}
