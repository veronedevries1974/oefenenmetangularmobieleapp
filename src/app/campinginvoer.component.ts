import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-camping-invoer',
  templateUrl: './campinginvoer.component.html',
  standalone: false,
})
export class CampingInvoerComponent {
    @Output() campingCreate = new EventEmitter<string>(); 
    InvoerCampingNaam = ''; 

    onCreateCamping() { 
        console.log('Created a camping:' + this.InvoerCampingNaam);
        this.campingCreate.emit(this.InvoerCampingNaam);
        this.InvoerCampingNaam = '';
        }
      } 