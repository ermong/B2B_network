import {Component, OnInit} from 'angular2/core'
import {IMedlem} from './medlem'
import {MedlemFilterPipe} from './medlem-filter.pipe'

@Component({
    selector: 'b2b-medlemsliste',
    templateUrl: 'app/medlemmer/medlemsliste.component.html',
    styleUrls: ['app/medlemmer/medlemsliste.component.css'],
    pipes: [MedlemFilterPipe]
})
export class MedlemslisteComponent implements OnInit{
    iconPxWidth: number = 100;
    visLogoer: boolean = true;
    filter: string ="";
    medlemslisteHeading: string = 'Medlemmer i nettverket';
    medlemmer: IMedlem[] = [
        {
            "medlem_id": 1, 
            "navn": "Idrettspartner", 
            "logoUrl":"",
            "kategorier":[]
        },
        {
            "medlem_id": 2, 
            "logoUrl": "http://www.knowit.no/globalassets/system/icons-and-logotypes/knowit-logotypes/knowit-logo-b.png/Large50",
            "navn": "Knowit Sør AS", 
            "kategorier": [
                {
                    "kategori_id":1, 
                    "navn": "Konsulent"
                }, 
                {
                    "kategori_id":2, 
                    "navn": "Webutvikling"
                }
            ]
        },
        {
            "medlem_id": 3, 
            "logoUrl":"",
            "navn": "Norengros Gustav Pedersen", 
            "kategorier": [
                {
                    "kategori_id":3, 
                    "navn": "Detaljhandel"
                }, 
                {
                    "kategori_id":4, 
                    "navn": "Rekvisita"
                }, 
                {
                    "kategori_id":5, 
                    "navn": "Kontormøbler"
                }
            ]
        }
    ];
    ngOnInit(): void {
        console.log('In OnInit');
    }

    toggleVisLogoer(): void {
        this.visLogoer = !this.visLogoer;
    }
}