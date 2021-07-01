import { CategoriesService, Structure } from './../../../../Services/Models/Codification/Categories/categories.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  isLoading: boolean = true;

  displayedColumns: string[];

  _data: Structure | any;

  dataSource: MatTableDataSource<Structure>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private categoriesService: CategoriesService) {

    this._data = this.categoriesService.getData();
    
    

    this.displayedColumns = this.categoriesService.getDisplayedColumns()

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
