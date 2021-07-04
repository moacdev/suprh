import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CongesAbsencesService, Structure } from './../../../Services/Models/Conges-Absence/conges-absences.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paie-conges',
  templateUrl: './paie-conges.component.html',
  styleUrls: ['./paie-conges.component.css']
})
export class PaieCongesComponent implements OnInit {

  isLoading: boolean = true;

  displayedColumns: string[];

  _data: Structure | any;

  dataSource: MatTableDataSource<Structure>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private congesAbsencesService: CongesAbsencesService, private http: HttpClient) {
    this.displayedColumns = this.congesAbsencesService.getDisplayedColumns()
    this._data = [{ id: "Chargement...", matricule: "",  date_entree: "", fonction: "" }];

    this.dataSource = new MatTableDataSource( this._data )
  }

  getRow(row: any){
    console.log(row)
  }


  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  ngOnInit(): void {
    this.loadGrades();
  }

  loadGrades() {
    this.isLoading= true;
    this.http.get("/api/conges-absences").subscribe( ( d )=> {
      this._data = d

      this.dataSource = new MatTableDataSource( this._data )
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.isLoading = false
    } )
    
  }

}
