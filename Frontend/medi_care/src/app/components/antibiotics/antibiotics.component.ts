import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-antibiotics',
  templateUrl: './antibiotics.component.html',
  styleUrls: ['./antibiotics.component.css']
})
export class AntibioticsComponent implements OnInit {

  antibioticsProductList:any[]=[];
  constructor(private crudHttp: CRUDServiceService) { }

  ngOnInit(): void {
    this.listAntibioticProduct();
  }

  listAntibioticProduct()
  {
    this.crudHttp.listProductByCategory("Antibiotics").subscribe((response)=>{
      this.antibioticsProductList=response;
    },(error=>{

    }));
  }

}
