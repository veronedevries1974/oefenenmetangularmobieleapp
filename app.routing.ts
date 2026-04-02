// app.routing.ts is verantwoordelijk voor aanbieden van twee tabbladen parent en child
import { NgModule } from "@angular/core"; //gereedschap voor configuratie
import { Routes, RouterModule } from "@angular/router"; //tool voor navigatiebalk

import { ParentComponent } from "./parent/parent.component"; //verbinden met navigatiebalk
import { ChildComponent } from "./child/child.component"; //verbinden met navigatiebalk

const routes: Routes = [ //definitie van de routes
    { path: '', component: ParentComponent}, //homepage
    { path: 'child', component: ChildComponent} //tweede pagina
]

@NgModule ({ //configuratie van de routermodule
    imports: [RouterModule.forRoot(routes)], //forRoot is lijst met tabs
    exports: [RouterModule] //export is beschikbaar voor hele app
})

export class AppRoutingModule {} //om deze navigatiemodule op te nemen in de hoofdmodule app.module.ts
// 'export class' exporteert 'approutingmodule