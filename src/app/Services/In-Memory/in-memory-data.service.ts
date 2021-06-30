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

    return {users};

  }


  constructor() { }
}
