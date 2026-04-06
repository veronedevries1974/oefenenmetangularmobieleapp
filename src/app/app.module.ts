//app.module.ts is component factory, de fabriek waar alle componenten ingeladen worden
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { CampingComponent } from './camping.component';
import { CampingInvoerComponent } from './campinginvoer.component';
import { CampingRegistratieInvoerComponent } from './registratie.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app.routing'; //ipv from ./app.routing.module
import { ChildService } from './child/child.service';

@NgModule({
  declarations: [AppComponent, CampingComponent, CampingInvoerComponent, CampingRegistratieInvoerComponent, ParentComponent, ChildComponent],
  imports: [CommonModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [ChildService, {provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
//bij providers ChildService toegevoegd om te implementeren 