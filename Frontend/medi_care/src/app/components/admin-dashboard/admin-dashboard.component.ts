import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { CRUDServiceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  productForm!:FormGroup;
  
  productList:any[]=[];
  modelProductData:any={
    productId:0,
    productName:"",
    productPrice:"",
    productAvailable:false,
    offer:"Not_Available",
    offerDeal:"none",
    bestSeller:false,
    imgSrc:""
  };
  medProduct:any;
  

  constructor(private crudHttp:CRUDServiceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.listAllProducts();

    this.productForm= this.formBuilder.group({
      name:['',Validators.required],
      unitPrice:['',Validators.required],
      imageUrl:['',Validators.required],
      category:['',Validators.required],
      available:['',Validators.required],
      offer:['',Validators.required],
      offerDetail:['',Validators.required],
      bestseller:['',Validators.required]
    })

    
  }

  listAllProducts()
  {
    this.crudHttp.listProducts().subscribe((response)=>{
      this.productList=response;
    },(error=>{

    }));
  }

  makeAvailable(product:any)
  {
    product.productAvailable=!product.productAvailable;
    this.crudHttp.updateAvailable(product,product.productId).subscribe((response)=>{
      this.listAllProducts();
    })
  }

  setModelData(product:any)
  {
    this.modelProductData=product;
  }

  addProduct()
  {
    let medProduct:any ={
      productName:this.productForm.value.name,
      productPrice:this.productForm.value.unitPrice,
      productCategory:"Antibiotics",
      productAvailable:true,
      offer:"Not_Available",
      offerDeal:"none",
      bestSeller:false,
      imgSrc:this.productForm.value.imageUrl
    }

    this.crudHttp.create(medProduct).subscribe((response)=>{
      this.listAllProducts();
      },(error=>{
    
      }));
  }

  updateProduct()
  {
   let medProduct:any ={
    productId:this.modelProductData.productId,
    productName: this.productForm.value.name==''?this.modelProductData.productName:this.productForm.value.name,
    productPrice:this.productForm.value.unitPrice==''?this.modelProductData.productPrice:this.productForm.value.unitPrice,
    productAvailable:this.productForm.value.available==''?this.modelProductData.productAvailable:this.productForm.value.available,
    offer:this.productForm.value.offer==''?this.modelProductData.offer:this.productForm.value.offer,
    offerDeal:this.productForm.value.offerDetail==''?this.modelProductData.offerDeal:this.productForm.value.offerDetail,
    bestSeller:this.productForm.value.bestseller==''?this.modelProductData.bestSeller:this.productForm.value.bestseller,
    imgSrc:this.productForm.value.imageUrl==''?this.modelProductData.imgSrc:this.productForm.value.imageUrl
  }
  console.log(medProduct);

  this.crudHttp.update(medProduct,medProduct.productId).subscribe((response)=>{
    this.listAllProducts();
  })


  }

  delete(id:number)
  {
    this.crudHttp.delete(id).subscribe((response)=>{
      this.listAllProducts();
    },(error=>{
    }));
  }

}
