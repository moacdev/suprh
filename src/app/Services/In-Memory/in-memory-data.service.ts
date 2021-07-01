import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';




@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  users: any;

  createDb(){

    let users = [
      { 
        id: 0,
        matricule: 'string ' + 1,
        nom_complet: 'fullname ' + 1,
        date_entree: '---',
        fonction: '---',
      }
    ];

    let grades = [
      { 
        id: 0,
        code: '12345 ' + 1,
        libelle: 'string ' + 1,
        etat: 'actif',
      },
      { 
        id: 1,
        code: '54321 ' + 1,
        libelle: 'gnirts ' + 1,
        etat: 'inactif',
      },
    ];

    return {users, grades};

  }


  constructor() { }
}
