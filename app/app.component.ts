import { Component } from 'angular2/core';
import { MedlemslisteComponent } from './medlemmer/medlemsliste.component';
@Component({
    selector: 'b2b-app',
    template: `<div>
    <h1>{{pageTitle}}</h1>
    <b2b-medlemsliste>Laster...</b2b-medlemsliste>
    </div>`,
    directives:[MedlemslisteComponent]
})
export class AppComponent{
    pageTitle: string = 'Vipers B2B nettverk'
}