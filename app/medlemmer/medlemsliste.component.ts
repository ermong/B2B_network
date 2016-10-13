import {Component} from 'angular2/core'

@Component({
    selector: 'b2b-medlemsliste',
    templateUrl: 'app/medlemmer/medlemsliste.component.html'
})
export class MedlemslisteComponent {
    iconPxWidth: number = 100;
    visBilder: boolean = true;
    medlemslisteHeading: string = 'Medlemmer i nettverket';
    medlemmer: any[] = [
        {
            "medlem_id": 1, 
            "logoUrl": "http://www.knowit.no/globalassets/system/icons-and-logotypes/knowit-logotypes/knowit-logo-b.png/Large50",
            "navn": "Knowit Sør AS", 
            "kategorier": [
                {"navn": "Konsulent"}, 
                {"navn": "Webutvikling"}
            ]
        },
        {
            "medlem_id": 2, 
            "navn": "Norengros Gustav Pedersen", 
            "kategorier": [
                {"navn": "Detaljhandel"}, 
                {"navn": "Rekvisita"}, 
                {"navn": "Kontormøbler"}
            ]
        }
    ];

    toggleVisBilder() {
        this.visBilder = !this.visBilder;
    }
}