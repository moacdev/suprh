import { Injectable } from '@angular/core';

export interface Structure {
  id: string;
  code: string;
  libelle: string;
  type: string;
  type_indemnite: string;
  montant: string;
  grade: string;
  categorie: string;
  fonction: string;
}
@Injectable({
  providedIn: 'root'
})
export class IndemnitesService {

  getData(): any {
    return [
      {
        id: "string",
        code: "string",
        libelle: "string",
        type: "string",
        type_indemnite: "string",
        montant: "string",
        grade: "string",
        categorie: "string",
        fonction: "string",
      }
    ];
  }
  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  displayedColumns: string[] = ['id', 'code', 'libelle', 'type', 'type_indemnite', 'montant', 'grade', 'categorie', 'fonction']

  constructor() { }
}
