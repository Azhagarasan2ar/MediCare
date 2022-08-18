package com.simplilearn.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="med_products")
public class Products {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private int productId;

	@Column(name="product_name")
	private String productName;
	
	@Column(name="price")
	private double productPrice;
	
	@Column(name="category")
	private String productCategory;
	
	@Column(name="available")
	private boolean productAvailable;

	@Column(name="offer")
	private String offer;
	
	@Column(name="offer_deal")
	private String offerDeal;
	
	@Column(name="best_seller")
	private boolean bestSeller;
	
	@Column(name="img_src")
	private String imgSrc;
	
	public int getProductId() {
		return productId;
	}


	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	public boolean isProductAvailable() {
		return productAvailable;
	}

	public void setProductAvailable(boolean productAvailable) {
		this.productAvailable = productAvailable;
	}


	public String getOffer() {
		return offer;
	}


	public void setOffer(String offer) {
		this.offer = offer;
	}


	public String getOfferDeal() {
		return offerDeal;
	}


	public void setOfferDeal(String offerDeal) {
		this.offerDeal = offerDeal;
	}


	public boolean getBestSeller() {
		return bestSeller;
	}


	public void setBestSeller(boolean bestSeller) {
		this.bestSeller = bestSeller;
	}


	public String getImgSrc() {
		return imgSrc;
	}


	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}
		
	
}
