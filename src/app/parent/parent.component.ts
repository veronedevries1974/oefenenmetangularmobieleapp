import { Component, OnInit } from '@angular/core'; //Input verwijderd
import { ChildService } from '../child/child.service'; //importeert service

@Component({ //parent component
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: false, //ngModule
})
export class ParentComponent  implements OnInit { //input-functie configuratie
  invoerWaarde: string[]; //@Input verwijderd

  constructor(private childService: ChildService) { // zorgt ervoor dat de service klaarligt
    this.invoerWaarde = this.childService.invoerRij; //element invoerWaarde in parent.component.html
   }                                            //invoerRij is collectie items dat door childservice verstuurd wordt

  ngOnInit() { //gebruikt de service om data op te halen en te wijzigen
    this.invoerWaarde = this.childService.invoerRij;
    this.childService.invoerWijziging.subscribe(invoerRij =>{ //verwijdert invoerwaarde uit invoerrij
      this.invoerWaarde = invoerRij;
    })
  }

  onChildInvoerDeleted(name:string) {
    this.childService.onChildInvoerDeleted(name);
  }
}
//geen Input bij import en export omdat data via service wordt aangeleverd
//ChildService bij import en onder constructor