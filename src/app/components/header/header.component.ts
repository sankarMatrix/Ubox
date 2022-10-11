import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() bodyStatus = new EventEmitter<boolean>();
  @Input() menuOff: boolean = false;

  constructor(private route:Router) { }
  searchEvent(){
    this.route.navigateByUrl('search-listing')
  }

  ngOnInit(): void {
  }

  public isMenuCollapsed = true;

  status: boolean = false;
clickEvent(){
    // this.status = !this.status;
    this.bodyStatus.emit(true);
    this.isMenuCollapsed = this.menuOff;
}


}
