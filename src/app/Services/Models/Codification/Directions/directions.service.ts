import { Injectable } from '@angular/core';

export interface Structure {
  id: string;
}
@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  getData(): any {
    return [
    ];
  }
  
  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  displayedColumns: string[] = ['id']

  constructor() { }
}
