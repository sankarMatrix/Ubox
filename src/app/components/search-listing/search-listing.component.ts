import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-listing',
  templateUrl: './search-listing.component.html',
  styleUrls: ['./search-listing.component.scss']
})
export class SearchListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isCollapsed = true;
}
