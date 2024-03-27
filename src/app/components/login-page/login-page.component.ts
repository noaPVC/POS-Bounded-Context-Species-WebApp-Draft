import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { DiverDto, loginRequest } from '../../models/user';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    if (this.userService.getUserFromLocalStorage() !== null) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUserForm = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  get email() {
    return this.loginUserForm.get('username');
  }

  get password() {
    return this.loginUserForm.get('password');
  }

  login(): void {
    console.log(this.loginUserForm.valid);
    if (this.loginUserForm.valid) {
      const loginData: any = this.loginUserForm.value;
      this.userService.login(loginData.userName, loginData.password).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          console.log('Login failed');
        },
      });
    }
  }
}
