import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Structure {
  id: string;
  code: string;
  libelle: string;
  etat: string;
  service: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepartementsService {

  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  displayedColumns: string[] = ['id', 'code', 'libelle', 'etat', 'service']


  apiCall(){
    return this.http.get("/api/departements");
  }

  getDisplayedDataFromApiCall(){
    return this.http.get("/api/departements");
  }

  constructor(private http: HttpClient) { }

  
}
