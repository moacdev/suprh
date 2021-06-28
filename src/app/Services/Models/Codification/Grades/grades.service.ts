import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

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
