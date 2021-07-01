import { FonctionsService } from './../../../../Services/Models/Codification/Fonctions/fonctions.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Structure } from 'src/app/Services/Models/Conges-Absence/conges-absences.service';
import { EmployesService } from 'src/app/Services/Models/Employes/employes.service';

@Component({
  selector: 'app-fonctions',
  templateUrl: './fonctions.component.html',
  styleUrls: ['./fonctions.component.css']
})
export class FonctionsComponent implements OnInit {

  isLoading: boolean = true;

  displayedColumns: string[];

  _data: Structure | any;

  dataSource: MatTableDataSource<Structure>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private fonctionService: FonctionsService) {

    this._data = this.fonctionService.getData();
    
    

    this.displayedColumns = this.fonctionService.getDisplayedColumns()

    this.dataSource = new MatTableDataSource(this._data);
  }

  getRow(row: any){
    console.log(row)
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

  ngOnInit(): void {
  }

}
