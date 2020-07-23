import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkAddAdmin: boolean = false;
  checkManageAdmin: boolean = false;
  public toggleAddAdmin(): void {
    if (this.checkAddAdmin == false) {
      this.checkAddAdmin = true;
      this.checkManageAdmin = false;
    }
  }
  public toggleManageAdmin(): void {
    if (this.checkManageAdmin == false) {
      this.checkAddAdmin = false;
      this.checkManageAdmin = true;
    }
  }
}
