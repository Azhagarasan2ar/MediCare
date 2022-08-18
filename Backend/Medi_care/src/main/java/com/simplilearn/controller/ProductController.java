package com.simplilearn.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.Products;
import com.simplilearn.service.ProductService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("api")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	
	@GetMapping("/products")
	private List<Products> getProducts()
	{
		List<Products> productList = productService.getAllProducts();
		
		return productList;
	}
	
	@GetMapping("/products/{category}")
	private List<Products> getProductByCategory(@PathVariable String category)
	{
		
		List<Products> productList = productService.findProductByCategory(category);
		
		return productList;
	}
	
	@GetMapping("/products/offers")
	private List<Products> getProductByOffer()
	{
		List<Products> productList = productService.getProductByOffer();
		
		return productList;
	}
	
	@GetMapping("/products/bestSellers")
	private List<Products> getProductByBestSellers()
	{
		List<Products> productList = productService.getProductByBestSeller();
		
		return productList;
	}
	
	
	@PostMapping("/products")
	private int addProduct(@RequestBody Products products)
	{
		productService.saveProduct(products);
		return products.getProductId();
	}
	
	@DeleteMapping("/products/{id}")
	private void deleteProduct(@PathVariable int id)
	{
		productService.deleteProduct(id);
	}
	
	@GetMapping("/products/search")
	private List<Products> search(@RequestParam("q") String q)
	{
		return productService.searchProduct(q);
	}
	
	@PutMapping("/products/available/{id}")
	private void setProductAvailability(@RequestBody Products product,@PathVariable int id)
	{
		productService.setProductAvailability(id, product);
		
	}
	
	@PutMapping("/products/update/{id}")
	private void updateProduct(@RequestBody Products product,@PathVariable int id)
	{
		productService.updateProduct(id, product);
		System.out.println(product);		
	}
	
	

}
