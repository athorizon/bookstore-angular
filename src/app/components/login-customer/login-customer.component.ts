import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ManageUsersService } from 'src/app/services/manage-users.service';
import { CustomerInformation } from 'src/app/models/customer-information';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {
  loginForm:FormGroup;
  customer:CustomerInformation;
  constructor(private formBuilder:FormBuilder,private service:ManageUsersService) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z]+.[a-zA-Z]+$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+@[0-9]*$")]),
    });
  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.service.loginCustomer(this.loginForm.value.email,this.loginForm.value.password).subscribe(
    (data)=>
    { this.customer=data;
       //localStorage.setItem(this.customer, data);
    },
    (error)=>
    {});
  }
}
