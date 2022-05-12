import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  clients: Client[];
  balance: number;

  constructor(private clientService: ClientService) {}

  getData() {
    this.clients = [];
    this.balance = 0;
    this.clientService.getClients().subscribe(
      (clients) => {
        this.clients = clients;
        clients.forEach(client => {
          this.balance += client.balance;
        });
      }
    );
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getData();
  }
}
