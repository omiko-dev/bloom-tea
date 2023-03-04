import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.css'],
  template: `
    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map>
  `,
})
export class ContactMapComponent {
  lat = 51.678418;
  lng = 7.809007;
  zoom = 15;
}
