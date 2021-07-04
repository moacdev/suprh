import { HttpClient } from '@angular/common/http';
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
@Injectable()
export class IndemnitesService {

  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  apiCall(){
    return this.http.get("/api/indemnites");
  }

  getDisplayedDataFromApiCall(){
    return this.http.get("/api/indemnites_table");
  }

  fields: string[] = ['id', 'code', 'libelle', 'type', 'type_indemnite', 'montant', 'grade', 'categorie', 'fonction']

  displayedColumns: string[] = ['id', 'code', 'libelle', 'type', 'type_indemnite', 'montant']


  constructor(private http: HttpClient) { }
}
