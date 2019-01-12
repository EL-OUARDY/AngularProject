import { Injectable } from '@angular/core';
import { CartItem } from './models/cartItem';
import { Product } from './models/product';
import { ShoppingCart } from './models/shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Cart = new ShoppingCart();
  constructor() { }

  addToCart(p: Product) {
    const item = this.Cart.items.find(x => x.product.Id === p.Id);
    if (item) {
      item.quantity++;
      return;
    }
    const newItem = new CartItem(p, 1);
    this.Cart.items.push(newItem);

  }

  removeCompleteItem(id) {
    const item = this.Cart.items.find(x => x.product.Id === id);
    if (item)
      this.Cart.items.splice(this.Cart.items.indexOf(item), 1);
  }

  removeFromCart(p) {
    const item = this.Cart.items.find(x => x.product.Id === p.Id);
    if (item && item.quantity > 1) {
      item.quantity--;
      return;

    } else if (item && item.quantity === 1) this.Cart.items.splice(this.Cart.items.indexOf(item), 1);
  }

  clearCart() {
    this.Cart.items = [];
    console.log(this.Cart.totalCartItems);
  }

}
