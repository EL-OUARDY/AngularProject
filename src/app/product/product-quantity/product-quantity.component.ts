import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }
  getQuantity() {
    const item = this.cartService.Cart.items.find(x => x.product.Id === this.product.Id);
    return item ? item.quantity : 0;
  }

}
