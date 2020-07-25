import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ManageUsersService } from 'src/app/services/manage-users.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginForm:FormGroup;
  admin:Admin;
  isSubmitted: boolean = false;
  constructor(private formBuilder:FormBuilder,private service:ManageUsersService) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z]+.[a-zA-Z]+$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+@[0-9]*$")]),
    });
    }

  ngOnInit(): void{
  }
  onSubmit()
  { console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    this.service.loginAdmin(this.loginForm.value.email,this.loginForm.value.password).subscribe(
    (data)=>
    { this.admin=data;
      console.log(this.admin);
    },
    
    (error)=>
    {});
  }

}
