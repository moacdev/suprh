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
export class CategoriesService {


  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  displayedColumns: string[] = ['id', 'code', 'libelle', 'etat']


  apiCall(){
    return this.http.get("/api/categories");
  }

  getDisplayedDataFromApiCall(){
    return this.http.get("/api/categories");
  }

  constructor(private http: HttpClient) { }

  
}
