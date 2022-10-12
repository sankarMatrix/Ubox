import { Component, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ubox';
  active = 1;
  constructor(private route:Router){

  }
  detailspage(){
    this.route.navigateByUrl('details')
  }
}
