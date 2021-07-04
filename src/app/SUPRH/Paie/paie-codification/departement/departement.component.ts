import { DepartementsService } from './../../../../Services/Models/Codification/Departements/departements.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Structure } from 'src/app/Services/Models/Conges-Absence/conges-absences.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { NotAccessDialogComponent } from '../../not-access-dialog/not-access-dialog.component';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any;

  
  displayedColumns: string[];
  
  _data: Structure | any;

  
  isLoading: boolean = true;
  
  dataSource: MatTableDataSource<Structure>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  
  isEditable = true; // AddNewForm
  editMode: boolean = false;
  _toggleShowAddNewForm: boolean = false;
  constructor(private depService: DepartementsService, private http: HttpClient, private _formBuilder: FormBuilder, private auth: AuthService, public dialog: MatDialog, private router: Router) {
    this.displayedColumns = this.depService.getDisplayedColumns()

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
    this.loadTable();


    this.firstFormGroup = this._formBuilder.group({
      codeCtrl: ['', Validators.required],
      libelleCtrl: ['', Validators.required],
      etatCtrl: ['', Validators.required],
      serviceCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  loadTable() {

    this.isLoading= true;

    this.depService.getDisplayedDataFromApiCall().subscribe( ( d )=> {
      this._data = d

      this.dataSource = new MatTableDataSource( this._data )
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.isLoading = false

    } );
    
  }

  reloadTable(){
    this.loadTable()
  }

  edit(){
    if (!this.auth.isAdmin) {
      const dialogRef = this.dialog.open(NotAccessDialogComponent);
  
      dialogRef.afterClosed().subscribe( result => {
        if (result != true) {
          this.editMode = false;
        }else{
          this.editMode = true;
        }
      });
    }else{
      this.editMode = true;
    }

  }

  addNewGrade(){
    let id = this._data.length
    let code = this.firstFormGroup.value.codeCtrl;
    let libelle = this.firstFormGroup.value.libelleCtrl;
    let etat = this.firstFormGroup.value.etatCtrl;
    let service = this.firstFormGroup.value.serviceCtrl;
    
    this.isLoading= true;
    this.http.post("/api/departements", { id, code, libelle, etat, service }).subscribe( ( d ) => {
      this.loadTable()
      this._toggleShowAddNewForm = false;
    } )

    
  }

  showAddNewForm(){
      this._toggleShowAddNewForm = !this._toggleShowAddNewForm;
  }

}
