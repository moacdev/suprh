import { Injectable } from '@angular/core';



export interface Structure {
  id: string;
  matricule: string; 
  nom_complet: string; 
  date_entree: string; 
  fonction: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  getData(): any {
    return [
      {
        id: "0",
        matricule: "9501234",
        nom_complet: "Sekou Touré",
        date_entree: "22/06/20",
        fonction: "Prof de Math",
      },
      {
        id: "0",
        matricule: "9564042",
        nom_complet: "Mohamed Maiga",
        date_entree: "05/01/19",
        fonction: "Prof de Compta",
      },
    ];
  }
  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  displayedColumns: string[] = ['id', 'matricule', 'nom_complet', 'date_entree', 'fonction']

  constructor() { }
}
