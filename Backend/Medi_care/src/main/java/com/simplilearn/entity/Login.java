package com.simplilearn.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="login")
public class Login {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="login_id")
	private int loginId;
	
	@Column(name="login_name")
	private String loginName;
	
	@Column(name="email")
	private String loginEmail;
	
	@Column(name="login_password")
	private String loginPassword;
	
	@Column(name="login_status")
	private String loginStatus;

	public int getLoginId() {
		return loginId;
	}


	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getLoginEmail() {
		return loginEmail;
	}

	public void setLoginEmail(String loginEmail) {
		this.loginEmail = loginEmail;
	}

	public String getLoginPassword() {
		return loginPassword;
	}

	public void setLoginPassword(String loginPassword) {
		this.loginPassword = loginPassword;
	}

	public String getLoginStatus() {
		return loginStatus;
	}

	public void setLoginStatus(String loginStatus) {
		this.loginStatus = loginStatus;
	}
	
	
	
	
	

}
