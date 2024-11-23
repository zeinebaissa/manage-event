// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    const usernameControl = this.loginForm.get('username');
  const passwordControl = this.loginForm.get('password');

  // Vérifier si les contrôles du formulaire sont définis
  if (usernameControl && passwordControl) {
    const username = usernameControl.value;
    const password = passwordControl.value;

    // Check if the username and password are correct
    if (username === 'admin' && password === '123456') {
      // Redirect to the home page (adjust the route as needed)
      console.log('ok');
      this.router.navigate(['/homepage']);
    } else {
      // Display an error message (you can customize this)
      alert('Invalid username or password');
    }
  }
}
}