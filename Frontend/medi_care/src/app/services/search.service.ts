import { Injectable } from '@angular/core';
import { CRUDServiceService } from './crudservice.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchList:string;
  constructor(private crudHttp:CRUDServiceService) { }


  doSearch(product:string)
  {
    this.searchList=product;
  }
  getSearch():string
  {
    console.log(this.searchList);
    return this.searchList;
  }
}
