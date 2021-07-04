import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Structure {
  id: string;
  code: string;
  libelle: string;
  etat: string;
}
@Injectable()
export class GradesService {



  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }
  displayedColumns: string[] = ['id', 'code', 'libelle', 'etat'];

  apiCall(){
    return this.http.get("/api/grades");
  }

  getDisplayedDataFromApiCall(){
    return this.http.get("/api/grades");
  }

  constructor(private http: HttpClient) { }

  
}
