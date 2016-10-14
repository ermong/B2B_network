System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MedlemslisteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MedlemslisteComponent = (function () {
                function MedlemslisteComponent() {
                    this.iconPxWidth = 100;
                    this.visBilder = true;
                    this.filter = "";
                    this.medlemslisteHeading = 'Medlemmer i nettverket';
                    this.medlemmer = [
                        {
                            "medlem_id": 1,
                            "navn": "Idrettspartner",
                            "logoUrl": "",
                            "kategorier": []
                        },
                        {
                            "medlem_id": 2,
                            "logoUrl": "http://www.knowit.no/globalassets/system/icons-and-logotypes/knowit-logotypes/knowit-logo-b.png/Large50",
                            "navn": "Knowit Sør AS",
                            "kategorier": [
                                {
                                    "kategori_id": 1,
                                    "navn": "Konsulent"
                                },
                                {
                                    "kategori_id": 2,
                                    "navn": "Webutvikling"
                                }
                            ]
                        },
                        {
                            "medlem_id": 3,
                            "logoUrl": "",
                            "navn": "Norengros Gustav Pedersen",
                            "kategorier": [
                                {
                                    "kategori_id": 3,
                                    "navn": "Detaljhandel"
                                },
                                {
                                    "kategori_id": 4,
                                    "navn": "Rekvisita"
                                },
                                {
                                    "kategori_id": 5,
                                    "navn": "Kontormøbler"
                                }
                            ]
                        }
                    ];
                }
                MedlemslisteComponent.prototype.toggleVisBilder = function () {
                    this.visBilder = !this.visBilder;
                };
                MedlemslisteComponent = __decorate([
                    core_1.Component({
                        selector: 'b2b-medlemsliste',
                        templateUrl: 'app/medlemmer/medlemsliste.component.html',
                        styleUrls: ['app/medlemmer/medlemsliste.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MedlemslisteComponent);
                return MedlemslisteComponent;
            }());
            exports_1("MedlemslisteComponent", MedlemslisteComponent);
        }
    }
});
//# sourceMappingURL=medlemsliste.component.js.map