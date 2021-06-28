import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployesService, Structure } from 'src/app/Services/Models/Employes/employes.service';





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

  constructor(private employesService: EmployesService) {

    this._data = this.employesService.getData();
    
    

    this.displayedColumns = this.employesService.getDisplayedColumns()

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

    setTimeout(() => {
      this.isLoading = false
    }, 3000);
    
  }

  
}

