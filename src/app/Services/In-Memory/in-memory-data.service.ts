import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';




@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  users : any = [
  ];

  grades : any = [
  ];

  fonctions : any = [
  ];

  categories : any = [
  ];

  directions : any = [
  ];

  departements : any = [
    
  ];
  echelons : any = [
  ];

  indemnites : any = [
  ];

  services : any = [
  ];
  conges_absences: any = [
  ];


  createDb(){

      let users = this.users;
      let grades = this.grades;
      let conges_absences = this.conges_absences;
      let services = this.services;
      let fonctions = this.fonctions;
      let indemnites = this.indemnites;
      let indemnites_table = this.indemnitesTable();
      let echelons = this.echelons;
      let departements = this.departements;
      let directions = this.directions;
      let categories = this.categories;

    return {
      users,
      grades,
      conges_absences,
      services,
      fonctions,
      indemnites,
      indemnites_table,
      echelons,
      departements,
      directions,
      categories,
    };

  }

  indemnitesTable(){

    let _indemnites = this.indemnites
    let excluded = [ 'grade', 'categorie', 'fonction' ]

    for (let _i = 0; _i < _indemnites.length; _i++) {
      excluded.forEach( (e) =>{
        _indemnites[_i].pop( e )
      } )
    }

    return _indemnites;
    
  }


  constructor() { }
}
