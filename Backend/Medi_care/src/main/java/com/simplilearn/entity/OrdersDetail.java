package com.simplilearn.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;



@Entity
@Table(name="order_detail")
public class OrdersDetail {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="order_id")
	private int ordersDetailId;
	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="product_price")
	private int productPrice;
	
	@Column(name="username")
	private String username;
	
	@Temporal(TemporalType.DATE)
	@Column(name="date_ordered")
	private Date dateOrdered;

	public int getOrdersDetailId() {
		return ordersDetailId;
	}

	public void setOrdersDetailId(int ordersDetailId) {
		this.ordersDetailId = ordersDetailId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Date getDateOrdered() {
		return dateOrdered;
	}

	public void setDateOrdered(Date dateOrdered) {
		this.dateOrdered = dateOrdered;
	}
	
	

}
