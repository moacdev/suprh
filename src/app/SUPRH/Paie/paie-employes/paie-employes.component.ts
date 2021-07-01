import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployesService, Structure } from 'src/app/Services/Models/Employes/employes.service';

import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";





@Component({
  selector: 'app-paie-employes',
  templateUrl: './paie-employes.component.html',
  styleUrls: ['./paie-employes.component.css']
})
export class PaieEmployesComponent implements OnInit, AfterViewInit {

  isLoading: boolean = true;
  
  displayedColumns: string[];

  _data: Structure | any;

  dataSource: MatTableDataSource<Structure>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private employesService: EmployesService, private http: HttpClient, private changeDetectorRef: ChangeDetectorRef) {

    //this._data = this.employesService.getData();
    
    
  

    this.displayedColumns = this.employesService.getDisplayedColumns()

    this._data = [{ id: "Chargement...", matricule: "",  date_entree: "", fonction: "" }];

    this.dataSource = new MatTableDataSource( this._data )

  }

  getRow(row: any){
    console.log(row)
  }

  addUser(){
    this.http.post("/api/users", { id: null, matricule: "002133", nom_complet: "Doumbia", date_entree: "11/11/11", fonction: "Prof" } ).subscribe( (d) =>{
      console.log(d)
    } )
    this.getUsers()
  }

  getUsers() {

    this.isLoading = true;

    this.http.get<any>("/api/users").subscribe( (d) =>{

      this._data = d
      this.dataSource = new MatTableDataSource(this._data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      
      this.isLoading = false


    } );
  }

  ngAfterViewInit() {
    

    
    //this.getUsers()
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }


  ngOnInit(): void {

    this.getUsers()
    

    
  }

  
}

