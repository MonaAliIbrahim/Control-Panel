import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private flashmessageServiec: FlashMessagesService
    ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('.*com$')]], //monaali5778@gmail.com
      password: ['', Validators.required]  // 123456
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).then(() => {
      this.router.navigate(['/']);
    }).catch((err) => {
      this.flashmessageServiec.show(err.message, {cssClass: 'alert alert-danger', timeout: 10000});
    });
  }

  ngOnInit() {
    this.authService.isLogined().subscribe(
      (auth) => {
        if (auth) {
          this.router.navigate(['/']);
        }
      }
    );
  }

}
