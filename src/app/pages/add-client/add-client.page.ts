import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {

  addClientForm: FormGroup;
  serverResponse: string;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router
    ) {
    this.addClientForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('.*com$')]],
      phone: ['', [Validators.required, Validators.pattern('^(011|012|010|015)[0-9]{8}$')]],
      balance: ['', Validators.required],
    });
    this.serverResponse = '';
  }

  onSubmit() {
    setTimeout(() => {
      this.clientService.addClient(this.addClientForm.value);
      this.addClientForm.reset();
      this.serverResponse = 'Client has been added successfuly';
      setTimeout(() => {
        this.router.navigate(['/client']);
      }, 2000);
    }, 2000);
  }

  ngOnInit(): void {
  }
}



