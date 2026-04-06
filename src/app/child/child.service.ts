//child.service.ts verbindt child met parentcomponent: bevat toevoeg en verwijderfunctie (tweetrapsraket)
import { Injectable } from "@angular/core"; //opslaan en versturen van data naar andere componenten
import { Subject } from "rxjs"; //pagina automatisch verversen na wijziging

@Injectable()

export class ChildService { //stelt service beschikbaar voor hele app
    invoerWijziging = new Subject<string[]>(); //tweetrapsraket functie wijziging
    invoerRij: string[] = ['Test']; //invoerfunctie met item Test

    onChildInvoerCreated(name:string){ //toevoegfunctie
        this.invoerRij.push(name);
        this.invoerWijziging.next(this.invoerRij); //tweetrapsraket: functie wijziging in created
    }
     onChildInvoerDeleted(name:string){ //verwijderfunctie
        this.invoerRij = this.invoerRij.filter(invoer => { //filter is verwijderopdracht aangeklikt item
            return invoer !== name;
        })
        this.invoerWijziging.next(this.invoerRij); //tweetrapsraket: functie wijziging in deleted
        console.log(this.invoerRij);
     }
}
//klasse ChildService operationeel gemaakt door de tag export
//data via invoerveld in ChildComponent opgeslagen en verstuurd met ChildService ipv via app.component.ts
//invoerWijziging via tweetrapsraket omdat verwijdercommando en daadwerkelijk verwijderen twee verschillende stappen zijn