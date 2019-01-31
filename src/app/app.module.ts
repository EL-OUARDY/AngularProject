import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZippyComponent } from './zippy/zippy.component';

import { CustomMaterialsModule } from './custom-materials.module';
import { TodoDashboardComponent } from './todos/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoService } from './todo.service';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './store';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { ReduxComponent } from './redux/redux.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FireAuthService } from './fire-auth.service';
import { AuthGuard } from './auth-guard.service';
import { FireUserService } from './fire-user.service';
import { AdminGuard } from './admin-guard.guard';
import { ProductService } from './product.service';

import { CustomFormsModule } from 'ng2-validation';
import { CartService } from './cart.service';
import { ProductCardComponent } from './product/product-cart/product-card.component';
import { ProductQuantityComponent } from './product/product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    HomeComponent,
    AddProductComponent,
    SignInUpComponent,
    SidebarComponent,
    ZippyComponent,
    ReduxComponent,
    TodoDashboardComponent,
    TodoListComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    CustomMaterialsModule,
    NgReduxModule,

    NgbDropdownModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    HttpClientModule
  ],
  providers: [
    ProductService,
    TodoService,
    FireUserService,
    FireAuthService,
    AuthGuard,
    AdminGuard,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
