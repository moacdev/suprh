import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface Structure {
  id: string;
  matricule: string; 
  nom_complet: string; 
  date_entree: string; 
  fonction: string;
}


@Component({
  selector: 'app-paie-employes',
  templateUrl: './paie-employes.component.html',
  styleUrls: ['./paie-employes.component.css']
})
export class PaieEmployesComponent implements OnInit, AfterViewInit {

  
  displayedColumns: string[] = ['id', 'matricule', 'nom_complet', 'date_entree', 'fonction'];

  _data: Structure | any;

  dataSource: MatTableDataSource<Structure>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor() {

    this._data = [
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

    this.dataSource = new MatTableDataSource(this._data);
  }

  getRow(row: any){
    console.log(row)
  }


  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
}