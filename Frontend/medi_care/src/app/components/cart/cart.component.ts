import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDServiceService } from 'src/app/services/crudservice.service';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderItemsList:any[]=[];
  totalPrice:number=0;
  constructor(private crudHttp:CRUDServiceService,private loginService:LoginServicesService,private router:Router) { }

  ngOnInit(): void {
    this.listOrders();
    
    
       
      
    
  }

  listOrders()
  {
    this.crudHttp.listOrders().subscribe((response)=>{
     
      this.orderItemsList=response;
      console.log(this.orderItemsList);
      this.orderItemsList.forEach((order)=>{
        this.totalPrice+=order.productPrice;
      })
      
    },(error)=>{

    });
    
  }



  btnClick()
  {
    if(this.loginService.getUser()!='' && this.loginService.getUser()!=undefined)
    {
      this.router.navigate(['payment']);
    }
    else
    {
      alert("You have to Login for making payment");
      this.router.navigate(['']);
    }
  }

}
