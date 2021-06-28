import { Injectable } from '@angular/core';

export interface Structure {
  id: string;
  code: string;
  libelle: string; 
  etat: string;
  jours: string;
  depart: string;
  retour: string;
  employe: string;
}

@Injectable({
  providedIn: 'root'
})
export class CongesAbsencesService {

  getData(): any {
    return [
    ];
  }
  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  displayedColumns: string[] = ['id', 'code', 'libelle', 'etat', 'jours', 'depart', 'retour', 'employe']

  constructor() { }
}
