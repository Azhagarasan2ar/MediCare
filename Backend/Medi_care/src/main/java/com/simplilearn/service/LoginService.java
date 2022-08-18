package com.simplilearn.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Login;
import com.simplilearn.repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginRepo;
	
	
	public Login getUser(String emailId,String password)
	{
		Optional<Login> optional=loginRepo.findByloginEmail(emailId); 
		
		if(optional.isPresent())
		{
			Login loginUser= optional.get();
			if(loginUser.getLoginPassword().equals(password))
			{
				return loginUser;
			}
		}
		return null;
	}
	
	public void saveUser(Login login)
	{
		List<Optional<Login>> optional=loginRepo.findByUserAndEmail(login.getLoginName(),login.getLoginEmail());
		
		if(optional.isEmpty())
		{
			loginRepo.save(login);
			
		}
		
	}
	
	public void changePassword(String emailId,String oldPwd,String newPwd)
	{
		Optional<Login> optional=loginRepo.findByloginEmail(emailId);
		
		if(optional.isPresent())
		{
			Login login=optional.get();
			if(login.getLoginPassword().equals(oldPwd))
			{
				login.setLoginPassword(newPwd);
				loginRepo.save(login);
			}
		}
	}

}


