import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active = 1;
  constructor(private route:Router){

  }
  detailspage(){
    this.route.navigateByUrl('details')
  }

  ngOnInit(): void {
  }

  status: boolean = false;
  isMenuCollapsed(){
    this.status = !this.status;       
}

}
