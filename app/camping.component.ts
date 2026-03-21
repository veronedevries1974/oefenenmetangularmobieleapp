import { Component, input } from '@angular/core';

@Component({
  selector: 'app-camping',
  templateUrl: './camping.component.html',
  standalone: false,
})
export class CampingComponent {
  campingList = input<string[]>([]); 
}