package com.simplilearn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.Login;
import com.simplilearn.service.LoginService;

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("api")
@RestController
public class LoginController {
	
	@Autowired
	LoginService service;
	
	@GetMapping("/login")
	private Login getUser(@RequestParam("emailId") String emailId,@RequestParam("password") String password)
	{
		return service.getUser(emailId, password);
	}
	
	@PostMapping("/login/signup")
	private void setUser(@RequestBody Login user)
	{
		service.saveUser(user);
	}
	
	@GetMapping("/login/changePassword")
	private void changePassword(@RequestParam("emailId") String emailId,@RequestParam("oldPwd") String oldPwd,@RequestParam("newPwd") String newPwd)
	{
		service.changePassword(emailId, oldPwd, newPwd);
	}

}
