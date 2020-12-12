package com.demo.bloodbank.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({
		"com.demo.bloodbank.api.config, com.demo.bloodbank.api.controller, com.demo.bloodbank.api.entity, com.demo.bloodbank.api.entity.repo" })
public class BloodBankApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BloodBankApiApplication.class, args);
	}

}
