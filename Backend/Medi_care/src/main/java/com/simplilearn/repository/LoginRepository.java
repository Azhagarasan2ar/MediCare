package com.simplilearn.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.simplilearn.entity.Login;

@Repository
public interface LoginRepository extends CrudRepository<Login,Integer>{
	
	Optional<Login> findByloginName(@Param("loginName") String name);
	
	
	Optional<Login> findByloginEmail(@Param("loginEmail") String email);
	
	@Query("SELECT login FROM Login login WHERE login.loginName= :loginName OR login.loginEmail= :loginEmail")
	List<Optional<Login>> findByUserAndEmail(@Param("loginName") String name, @Param("loginEmail") String email);
}
