import { GradesService } from './../../../../Services/Models/Codification/Grades/grades.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Structure } from 'src/app/Services/Models/Conges-Absence/conges-absences.service';
import { EmployesService } from 'src/app/Services/Models/Employes/employes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  displayedColumns: string[];

  _data: Structure | any;

  isLoading: boolean = true;

  dataSource: MatTableDataSource<Structure>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private gradeService: GradesService, private http: HttpClient) {

    
    
    

    this.displayedColumns = this.gradeService.getDisplayedColumns()

    this._data = [{ id: "Chargement...", matricule: "",  date_entree: "", fonction: "" }];

    this.dataSource = new MatTableDataSource( this._data )
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
    this.loadGrades();
  }

  loadGrades() {
    this.isLoading= true;
    this.http.get("/api/grades").subscribe( ( d )=> {
      this._data = d

      this.dataSource = new MatTableDataSource( this._data )

      this.isLoading = false
    } )
    
  }

}
