import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../models/shoppingCart';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent {
  @Input('cart') cart: ShoppingCart;

  constructor() {
  }
}
