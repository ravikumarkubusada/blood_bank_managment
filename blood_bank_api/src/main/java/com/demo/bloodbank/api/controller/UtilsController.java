package com.demo.bloodbank.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.bloodbank.api.entity.BloodGroups;
import com.demo.bloodbank.api.entity.repo.BloodGroupsRepository;

@RestController
@RequestMapping("/api/utils")
@CrossOrigin()
public class UtilsController {

	@Autowired
	private BloodGroupsRepository bloodRepo;

	@GetMapping("/bloodgrps")
	public List<BloodGroups> getAllBloodGroups() {
		return bloodRepo.findAll();
	}
}
