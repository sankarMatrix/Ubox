import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
>>>>>>> sankar

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `],
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

  closeResult = '';

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}


