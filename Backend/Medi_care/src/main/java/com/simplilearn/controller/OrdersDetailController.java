package com.simplilearn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.OrdersDetail;
import com.simplilearn.service.OrdersDetailService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("api")
public class OrdersDetailController {
	
	@Autowired
	OrdersDetailService orderService;
	
	
	@GetMapping("/orders")
	private List<OrdersDetail> getOrderss()
	{
		List<OrdersDetail> orderList = orderService.getOrders();
		
		return orderList;
	}
	
	@PostMapping("/orders")
	private void addProduct(@RequestBody OrdersDetail order)
	{
		orderService.saveOrder(order);
	}

}
