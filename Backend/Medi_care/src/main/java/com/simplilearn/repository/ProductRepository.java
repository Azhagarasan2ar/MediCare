package com.simplilearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.simplilearn.entity.Products;


@Repository
public interface ProductRepository extends CrudRepository<Products,Integer>
{

	
	@Query("SELECT p FROM Products p WHERE p.productAvailable = true AND p.productCategory= :productCategory")
	List<Products> findByAvailableProductCategory(@Param("productCategory") String product);
	
	List<Products> findByoffer(@Param("offer") String offer);
	
	@Query("SELECT p FROM Products p WHERE p.bestSeller = true")
	List<Products> findByBestSeller();
	
	@Query("SELECT p FROM Products p WHERE p.productName LIKE %?1% OR p.productCategory LIKE %?1%")
	List<Products> search(String keyword);
	
	@Query("SELECT DISTINCT p.productCategory FROM Products p")
	List<String> findCategory();
	
}
