import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ManageUsersService } from 'src/app/services/manage-users.service';
import { Admin } from 'src/app/models/admin';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  
  admin:any;
  email:string;
  password:string;
  isSubmitted: boolean = false;
  checkError:boolean=false;
  checkInfo:boolean=false;
  errorMessage:string;
  constructor(private service:ManageUsersService) {
    
    }

  ngOnInit(){
    
    

  }
  onSubmit(form:NgForm)
  { console.log(this.email);
    console.log(this.password);
    this.checkInfo=false;
    this.checkError=false;
    
    this.service.loginAdmin(this.email,this.password).subscribe(
    (data)=>
    { 
      form.reset();
      this.admin=data;
      this.checkInfo=true;
      this.checkError=false;
      alert("LoggedIn Succesfully")
      console.log(this.admin);
      window.location.href="/manageadmin";
    },
    
    (error)=>
    {this.errorMessage=error.error;
      this.checkError=true;
      this.checkInfo=false;
    });
  }
}
