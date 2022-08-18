import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from 'src/app/services/crudservice.service';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-best-sellers-and-offers',
  templateUrl: './best-sellers-and-offers.component.html',
  styleUrls: ['./best-sellers-and-offers.component.css']
})
export class BestSellersAndOffersComponent implements OnInit {

  offerProducts:any[]=[];
  bestSellerList:any[]=[];
  ordersList:Array<any>;

  constructor(private crudHttp: CRUDServiceService,private loginService:LoginServicesService) { }

  ngOnInit(): void {
    this.listOfferProducts();
    this.listBestSellerProducts();
  }

  listOfferProducts()
  {
    this.crudHttp.listProductsByOffer().subscribe((response)=>{
      this.offerProducts=response;
    },(error=>{

    }));
  }

  listBestSellerProducts()
  {
    this.crudHttp.listProductsByBestSellers().subscribe((response)=>{
      this.bestSellerList=response;
    },(error=>{

    }));
  }

  addOrder(product:any)
  {
    console.log(this.loginService.getUser());
    console.log(this.loginService.getUserName());

    let order={
      productName:product.productName,
      productPrice:product.productPrice,
      username:this.loginService.getUserName(),
      dateOrdered:new Date().getDate()
    }

    this.crudHttp.createOrder(order).subscribe((response)=>{
      response;
    },(error=>{

    }));

  }

}
