import { Component, OnInit } from '@angular/core'; //Output en EventEmitter verwijderd, gaat via childservice
import { ChildService } from './child.service'; //opslaan en versturen data

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone: false,
})
export class ChildComponent  implements OnInit { //child stuurt invoer naar parent
// (decorator) @Output() uitvoerCreate = (object)new EventEmitter<string>(); childservice verzorgt output data 
ChildInvoerModel = '';

onChildInvoer(){ 
  console.log('Data verstuurd: ' + this.ChildInvoerModel);
  //this.uitvoerCreate.emit(this.ChildInvoerModel);
  this.childService.onChildInvoerCreated(this.ChildInvoerModel);//onChildInvoerCreated verwijst naar functie in child.service.ts
  this.ChildInvoerModel = '';
}

  constructor(private childService: ChildService) { }

  ngOnInit() {}

}
