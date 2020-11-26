import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isModeLogin = true;
  isLoading = false;
  error?: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isModeLogin = !this.isModeLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.isLoading = true;
    const email = form.value['email'];
    const password = form.value['password'];

    if (this.isModeLogin) {
      this.authService.login(email, password).subscribe(
        response => (
          this.router.navigate(['/recipebook']), (this.isLoading = false)
        ),
        err => (
          (this.error = `An error occured: ${err.error?.error?.message}`),
          console.error(err.message),
          (this.isLoading = false)
        )
      );
    } else {
      this.authService.signUp(email, password).subscribe(
        response => (
          this.router.navigate(['/recipebook']), (this.isLoading = false)
        ),
        err => (
          (this.error = `An error occured: ${err.error?.error?.message}`),
          console.error(err.message),
          (this.isLoading = false)
        )
      );
    }
    form.reset();
  }

  onCloseModalHandler() {
    this.error = ''!;
  }
}
