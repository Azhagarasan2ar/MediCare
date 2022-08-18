import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from 'src/app/services/crudservice.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchListItems:any[]=[];
  constructor(private searchService:SearchService,private crudHttp:CRUDServiceService) { }

  ngOnInit(): void 
  {
    
    let searchList:string=this.searchService.getSearch();
    console.log(this.searchService.getSearch());
    this.listSearch(searchList);
  }

  listSearch(searchList:string)
  {
    this.crudHttp.search(searchList).subscribe((response)=>{
      this.searchListItems=response;
    },(error=>{

    }));
  }




}
