import { Injectable } from '@angular/core';
import { Login } from '../classes/login';
import { CRUDServiceService } from './crudservice.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

 user:any;
  
  constructor() { }


  setUser(user:any)
  {
    this.user={
      loginId:user.loginId,
      loginName:user.loginName,
      loginEmail:user.loginEmail,
      loginPassword:user.loginPassword,
      loginStatus:user.loginStatus
    }
  
  }

  getUser():any
  {
    return this.user;
  }

  getUserName():string
  {
    if(this.user!==undefined)
    {
      return this.user.loginName;
    }
    return "";
  }

}
