import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss'],
})
export class ClientDetailsPage implements OnInit {

  id: string;
  client: Client;
  showForm: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private flashMessage: FlashMessagesService) {
      this.showForm = false;
  }

  updateBalance() {
    this.clientService.updateBalance(this.client).then(() => {
      this.flashMessage.show('Balance of Client has been updated successfuly', {cssClass: 'alert-success text-center', timeout: '3000'});
    }).catch(() => {
      this.flashMessage.show('something went rong please try again', {cssClass: 'alert-danger  text-center', timeout: '3000'});
    });
    this.showForm = !this.showForm;
  }

  deleteClient(client) {
    if (confirm('Are you sure you want to delete client?')) {
      this.clientService.deleteClient(this.client).then(() => {
        this.flashMessage.show('Client has been deleted successfuly', {cssClass: 'alert-success text-center', timeout: '3000'});
        setTimeout(() => {
          this.router.navigate(['/client']);
        }, 2000);
      }).catch(() => {
        this.flashMessage.show('something went rong please try again', {cssClass: 'alert-danger  text-center', timeout: '3000'});
      });
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.clientService.getClient(this.id).subscribe(
      (res) => this.client = res,
    );
  }

}
