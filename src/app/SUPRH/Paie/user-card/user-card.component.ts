import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() index: number = 0;
  @Input() isGridListing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
