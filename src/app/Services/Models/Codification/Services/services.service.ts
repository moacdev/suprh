import { Injectable } from '@angular/core';

export interface Structure {
  id: string;
  code: string;
  libelle: string;
  etat: string;
  direction: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  getData(): any {
    return [
      {
        id: "0",
        code: "12345",
        libelle: "John doe",
        etat: "ok",
        direction: "1"
      },
      {
        id: "1",
        code: "01562",
        libelle: "John snow",
        etat: "ok",
        direction: "0"
      },{
        id: "2",
        code: "54321",
        libelle: "John fat",
        etat: "encours",
        direction: "2"
      },
      
    ];
  }
  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  displayedColumns: string[] = ['id', 'code', 'libelle', 'etat', 'direction'];

  constructor() { }
}
