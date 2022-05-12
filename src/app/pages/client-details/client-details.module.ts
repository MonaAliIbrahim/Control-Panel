import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClientDetailsPageRoutingModule } from './client-details-routing.module';
import { ClientDetailsPage } from './client-details.page';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientDetailsPageRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  declarations: [ClientDetailsPage]
})
export class ClientDetailsPageModule {}
