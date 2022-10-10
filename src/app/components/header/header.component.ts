import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() bodyStatus = new EventEmitter<boolean>();
  @Input() menuOff: boolean = false;

  constructor() { }

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
