import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  declarations: [LoginPage],
  providers: [
    AuthService,
    FlashMessagesService
  ]
})
export class LoginPageModule {}
