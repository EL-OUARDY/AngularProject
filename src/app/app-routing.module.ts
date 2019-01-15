import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './product/add-product/add-product.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { ReduxComponent } from './redux/redux.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthGuard } from './auth-guard.service';
import { AdminGuard } from './admin-guard.guard';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInUpComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'redux', component: ReduxComponent },

  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },

  { path: 'add-product', component: AddProductComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
