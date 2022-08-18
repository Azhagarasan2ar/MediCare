import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-anti-infective-agent',
  templateUrl: './anti-infective-agent.component.html',
  styleUrls: ['./anti-infective-agent.component.css']
})
export class AntiInfectiveAgentComponent implements OnInit {

  antiInfectiveProductList:any[]=[];
  constructor(private crudHttp:CRUDServiceService) { }

  ngOnInit(): void {
    this.listAntiInfectiveProduct();
  }

  listAntiInfectiveProduct()
  {
    this.crudHttp.listProductByCategory("Anti-Infective Agent").subscribe((response)=>{
      this.antiInfectiveProductList=response;
    },(error=>{

    }));
  }

}
