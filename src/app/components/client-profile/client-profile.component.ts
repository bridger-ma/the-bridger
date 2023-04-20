import { Component, Input } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css'],
})
export class ClientProfileComponent {
  @Input() client!: Client;
  constructor() {
    console.log(this.client);
  }
}
