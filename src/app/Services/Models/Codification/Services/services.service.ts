import { HttpClient } from '@angular/common/http';
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

  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  displayedColumns: string[] = ['id', 'code', 'libelle', 'etat', 'direction'];

  
  apiCall(){
    return this.http.get("/api/services");
  }

  getDisplayedDataFromApiCall(){
    return this.http.get("/api/services");
  }

  constructor(private http: HttpClient) { }

  
}