import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //Laster all funksjonalitet
import { MedlemslisteComponent } from './medlemmer/medlemsliste.component';
import { MedlemService} from './medlemmer/medlem.service';
@Component({
    selector: 'b2b-app',
    template: `<div>
    <h1>{{pageTitle}}</h1>
    <b2b-medlemsliste>Laster...</b2b-medlemsliste>
    </div>`,
    directives:[MedlemslisteComponent],
    providers:[HTTP_PROVIDERS]
})
export class AppComponent{
    pageTitle: string = 'Vipers B2B nettverk'

}