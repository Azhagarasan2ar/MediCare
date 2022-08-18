import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDServiceService } from 'src/app/services/crudservice.service';
import { LoginServicesService } from 'src/app/services/login-services.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  users:any[]=[];
  user:any;
  loginForm:FormGroup;
  signupForm:FormGroup;
  searchForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private loginService:LoginServicesService,private router:Router,private crudHttp:CRUDServiceService,private searchService:SearchService) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
    this.signupForm= this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    });
    this.searchForm= this.formBuilder.group({
      search:['',Validators.required]
      
    });
  }

  login()
  {
    console.log(this.loginForm.value.email + this.loginForm.value.password);
    
    
    this.crudHttp.getUser(this.loginForm.value.email,this.loginForm.value.password).subscribe((response)=>{

      this.users[0]=response;

      this.user=this.users.find((user:any)=>{
        return user.loginEmail===this.loginForm.value.email &&user.loginPassword==this.loginForm.value.password;
      })
      console.log(this.user);
      console.log(this.user.loginName);
      if(this.user!==undefined)
      {
        alert("Login success");
        this.loginService.setUser(this.user);
        if(this.user.loginStatus==="admin")
        {
          console.log(this.user);
          this.router.navigate(['admin']);
        }
      }


    },(error=>{
        alert("Something went wrong!")
      }));
      
    /*this.user={
      ...this.loginService.getUser()
    };
    
    this.loginForm.reset();
    this.loginState();*/
  }

  loginState()
  {
    if(this.user!==undefined&&this.user.loginStatus==="admin")
    {
      console.log(this.user);
      this.router.navigate(['admin']);
    }
    else
    {
      console.log(this.user);
      this.router.navigate(['']);
    }
  }

  signup()
  {
    let user={
      loginName:this.signupForm.value.name,
      loginEmail:this.signupForm.value.email,
      loginPassword:this.signupForm.value.password,
      loginStatus:"user"
    }
    this.loginForm.reset();
    this.crudHttp.createUser(user).subscribe(response=>{

    },(err=>{

    }));
  }
  doSearch()
  {
    console.log(this.searchForm.value.search);
    let searchItem=this.searchForm.value.search;

    if(searchItem!='')
    {
      this.searchService.doSearch(searchItem);
      this.router.navigate(['search']);
    }
  }

}
