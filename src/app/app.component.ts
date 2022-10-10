import { Component, DoCheck, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() status: any;
  title = 'ubox';
  active = 1;
  statusBody:boolean = false;

  constructor(private route:Router){

  }
  detailspage(){
    this.route.navigateByUrl('details')
  }
  changeStatus(event: any) {
    console.log(event);
    
    this.statusBody = event;
  }
  hideMenu() {
    this.statusBody = false;
  }
}
