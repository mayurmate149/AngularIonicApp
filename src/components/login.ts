import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
<form (ngSubmit)="login()"
      [formGroup]="form" class="login">
  <label>Email</label>
  <input type="email"
         formControlName="email" name="email">
  <label>Password</label>
  <input type="password"
         formControlName="password">
  <button type="submit">Login</button>
</form>
`,
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    console.log(`Login ${this.form.value.email}`);
  }
}
