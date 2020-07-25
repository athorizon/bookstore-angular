import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  constructor(private http:HttpClient) { }


  getAllUsers():Observable<any>
  {
    return this.http.get("http://localhost:8083/admin/getallusers/101")
  }
  

  loginAdmin(email:string, password:string)
  {
    return this.http.get("http://localhost:8083/adminlogin?email="+email+"&password="+password);
  }

  loginCustomer(email:string, password:string)
  {
    return this.http.get("http://localhost:8083/customerlogin?email="+email+"&password="+password);
  }
}
