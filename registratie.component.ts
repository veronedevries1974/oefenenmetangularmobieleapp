import { Component, Output, EventEmitter } from '@angular/core'; // Voeg Input toe (Child)

@Component({
  selector: 'app-camping-registratie',
  templateUrl: './registratie.component.html',
  standalone: false,
})
export class CampingRegistratieInvoerComponent {
    @Output() campingRegistratieCreate = new EventEmitter<string>(); // outputfunctie en opslagfunctie eventemitter
    InvoerCampingRegistratie = ''; // object registratie in invoerveld wordt door output geexporteerd
    
    onCreateCampingRegistratie() { //input wordt geexporteerd
        console.log('Created a campingregistratie:' + this.InvoerCampingRegistratie); //testfunctie
        this.campingRegistratieCreate.emit(this.InvoerCampingRegistratie);
        this.InvoerCampingRegistratie = '';
        }
    }