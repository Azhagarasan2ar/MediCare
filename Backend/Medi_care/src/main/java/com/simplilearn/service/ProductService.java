package com.simplilearn.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Products;
import com.simplilearn.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepo;
	
	public List<Products> findProductByCategory(String category)
	{
		List<Products> productList=new ArrayList<>();
		
		
		productRepo.findByAvailableProductCategory(category).forEach(product -> productList.add(product));
		
		return productList;
	}
	
	public List<Products> getProductByOffer()
	{
		List<Products> productList=new ArrayList<>();
		
		
		productRepo.findByoffer("Available").forEach(product -> productList.add(product));
		
		return productList;
	}
	
	public List<Products> getProductByBestSeller()
	{
		List<Products> productList=new ArrayList<>();
		
		
		productRepo.findByBestSeller().forEach(product -> productList.add(product));
		
		return productList;
	}
	
	public List<Products> getAllProducts()
	{
		List<Products> productList=new ArrayList<>();
		
		
		productRepo.findAll().forEach(product -> productList.add(product));
		
		return productList;
	}
	
	public void saveProduct(Products product)
	{
		productRepo.save(product);
	}
	
	public List<Products> searchProduct(String keyword)
	{
		if(keyword!=null)
		{
			return productRepo.search(keyword);
		}
		return null;
	}
	
	public void deleteProduct(int id)
	{
		productRepo.deleteById(id);
	}

	public void setProductAvailability(int id,Products updateProduct)
	{
		Optional<Products> Optproduct=productRepo.findById(id);
		
		if(Optproduct.isPresent())
		{
			Products product=Optproduct.get();
			
			product.setProductAvailable(updateProduct.isProductAvailable());
			productRepo.save(product);
		}
	}
	
	public void updateProduct(int id,Products updateProduct)
	{
		Optional<Products> Optproduct=productRepo.findById(id);
		
		if(Optproduct.isPresent())
		{
			System.out.println(updateProduct);
			Products product=Optproduct.get();
			product.setProductName(updateProduct.getProductName());
			product.setProductPrice(updateProduct.getProductPrice());
			product.setImgSrc(updateProduct.getImgSrc());
			product.setOffer(updateProduct.getOffer());
			product.setOfferDeal(updateProduct.getOfferDeal());
			product.setBestSeller(updateProduct.getBestSeller());
			product.setProductAvailable(updateProduct.isProductAvailable());
			productRepo.save(product);
		}
	}
}
