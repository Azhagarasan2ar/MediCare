import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-analgesics',
  templateUrl: './analgesics.component.html',
  styleUrls: ['./analgesics.component.css']
})
export class AnalgesicsComponent implements OnInit {


  analgesicsProductList:any[]=[];
  constructor(private crudHttp:CRUDServiceService) { }

  ngOnInit(): void {
    this.listAnalgesicsProduct();
  }


  listAnalgesicsProduct()
  {
    this.crudHttp.listProductByCategory("Analgesics").subscribe((response)=>{
      this.analgesicsProductList=response;
    },(error=>{

    }));
  }
}
