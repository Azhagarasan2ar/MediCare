import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-antipyretics',
  templateUrl: './antipyretics.component.html',
  styleUrls: ['./antipyretics.component.css']
})
export class AntipyreticsComponent implements OnInit {

  antiPyreticsProductList:any[]=[];
  constructor(private crudHttp:CRUDServiceService) { }

  ngOnInit(): void {
    this.listAntipyreticsProduct();
  }

  listAntipyreticsProduct()
  {
    this.crudHttp.listProductByCategory("Antipyretic").subscribe((response)=>{
      this.antiPyreticsProductList=response;
    },(error=>{

    }));
  }

}
