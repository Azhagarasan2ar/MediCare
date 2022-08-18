package com.simplilearn.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.OrdersDetail;
import com.simplilearn.repository.OrdersDetailRepository;

@Service
public class OrdersDetailService {
	
	@Autowired
	OrdersDetailRepository orderRepo;

	public List<OrdersDetail> getOrders()
	{
		List<OrdersDetail> ordersList=new ArrayList<>();
		
		
		orderRepo.findAll().forEach(order -> ordersList.add(order));
		
		return ordersList;
	}
	
	public void saveOrder(OrdersDetail order)
	{
		orderRepo.save(order);
	}
}
