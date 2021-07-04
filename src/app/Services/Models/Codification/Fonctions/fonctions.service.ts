import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Structure {
  id: string;
  code: string;
  libelle: string;
  etat: string;
}

@Injectable({
  providedIn: 'root'
})
export class FonctionsService {

  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  displayedColumns: string[] = ['id', 'code', 'libelle', 'etat']


  apiCall(){
    return this.http.get("/api/fonctions");
  }

  getDisplayedDataFromApiCall(){
    return this.http.get("/api/fonctions");
  }

  constructor(private http: HttpClient) { }

  
}
