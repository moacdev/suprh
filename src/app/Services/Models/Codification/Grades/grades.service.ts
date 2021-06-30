import { Injectable } from '@angular/core';

export interface Structure {
  id: string;
  code: string;
  libelle: string;
  etat: string;
}
@Injectable()
export class GradesService {

  getData(): any {
    return [
      {
        id: "0",
        code: "12345",
        libelle: "John doe",
        etat: "ok",
      },
      {
        id: "1",
        code: "01562",
        libelle: "John snow",
        etat: "ok",
      },{
        id: "2",
        code: "54321",
        libelle: "John fat",
        etat: "encours",
      },
      
    ];
  }
  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }
  displayedColumns: string[] = ['id', 'code', 'libelle', 'etat'];

  constructor() { }

  
}
