import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductValidators } from 'src/common/validators/product.validators';

import { FireAuthService } from '../fire-auth.service';
@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent {
  constructor(private auth: FireAuthService) {
  }
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), ProductValidators.cannotContainSpace]),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  googleLogin() {
    this.auth.Login();
  }

  submit(form) {
    // console.log(form);
  }
}
