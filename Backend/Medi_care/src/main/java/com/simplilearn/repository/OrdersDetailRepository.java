package com.simplilearn.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.entity.OrdersDetail;

@Repository
public interface OrdersDetailRepository extends CrudRepository<OrdersDetail,Integer>
{
	
	

}
