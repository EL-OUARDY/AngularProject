import { Component } from '@angular/core';
import { FireAuthService } from '../fire-auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public auth: FireAuthService, private cartService: CartService) {
  }

  getCartCount() {
    return this.cartService.Cart.totalCartItems;
  }

  Logout() {
    this.auth.Logout();
  }

}
