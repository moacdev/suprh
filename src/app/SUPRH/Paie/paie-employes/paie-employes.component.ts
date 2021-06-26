import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paie-employes',
  templateUrl: './paie-employes.component.html',
  styleUrls: ['./paie-employes.component.css']
})
export class PaieEmployesComponent implements OnInit {

  _isGridListing: boolean = false;

  totalUser: any = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
