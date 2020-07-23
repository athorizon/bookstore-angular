import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  checkAddCustomer: boolean = false;
  checkManageCustomer: boolean = false;
  public toggleAddCustomer(): void {
    if (this.checkAddCustomer == false) {
      this.checkAddCustomer = true;
      this.checkManageCustomer = false;
    }
  }
  public toggleManageCustomer(): void {
    if (this.checkManageCustomer == false) {
      this.checkAddCustomer = false;
      this.checkManageCustomer = true;
    }
  }
}
