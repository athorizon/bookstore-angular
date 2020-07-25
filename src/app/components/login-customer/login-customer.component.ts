import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ManageUsersService } from 'src/app/services/manage-users.service';
import { CustomerInformation } from 'src/app/models/customer-information';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {
 
  customer:any;
  email:string;
  password:string;
  isSubmitted: boolean = false;
  checkError:boolean=false;
  checkInfo:boolean=false;
  errorMessage:string;
  constructor(private service:ManageUsersService) { 
    
  }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    console.log(this.email);
    console.log(this.password);
    this.checkInfo=false;
    this.checkError=false;
    this.service.loginAdmin(this.email,this.password).subscribe(
    (data)=>
    { 
      form.reset();
      this.customer=data;
      this.checkInfo=true;
      this.checkError=false;
      alert("LoggedIn Succesfully")
      console.log(this.customer);
      // window.location.href="/manageadmin";
    },
    
    (error)=>
    {this.errorMessage=error.error;
      this.checkError=true;
      this.checkInfo=false;
    });
  }
}
