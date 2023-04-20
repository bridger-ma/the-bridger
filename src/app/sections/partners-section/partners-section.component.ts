import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'partners-section',
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.css'],
})
export class PartnersSection {
  clients: Client[] = [
    {
      title: 'CANAL+',
      url: 'https://www.ekino.fr/use-case/mycanal/',
      logo: 'https://www.ekino.fr/uploads/2020/08/logoCanal.png',
    },
    {
      title: 'Renault',
      url: 'https://www.renault.fr/',
      logo: 'https://www.ekino.fr/uploads/2021/09/Sans-titre-2.png',
    },
  ];
}
