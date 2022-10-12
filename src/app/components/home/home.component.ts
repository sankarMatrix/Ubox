import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition
// } from '@angular/animations';

@Component({
  selector: 'app-home',
  // animations: [
  //   trigger('openClose', [
     
  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.8,
  //       backgroundColor: 'blue'
  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ]),
  // ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active = 1;
  // isOpen = true;

  
  constructor(private route:Router){

  }
  detailspage(){
    this.route.navigateByUrl('details')
  }

  ngOnInit(): void {
  }

  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }

}









