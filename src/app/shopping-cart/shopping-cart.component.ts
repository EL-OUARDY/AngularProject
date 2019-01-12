import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.Cart;
  }

  removeCompleteItem(id) {
    this.cartService.removeCompleteItem(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
