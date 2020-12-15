package com.demo.bloodbank.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.bloodbank.api.entity.BloodGroups;
import com.demo.bloodbank.api.entity.Donars;
import com.demo.bloodbank.api.entity.repo.DonarsRepository;

@RestController
@RequestMapping("/api/bloodbank")
@CrossOrigin()
public class DonarController {

	private DonarsRepository donarRepo;

	/**
	 * @param donarRepo
	 */
	@Autowired
	public DonarController(DonarsRepository donarRepo) {
		this.donarRepo = donarRepo;
	}

	@GetMapping("/")
	public List<Donars> getAllDonarsList() {
		return donarRepo.findAll();
	}
	
	@GetMapping("/{id}/")
	public Donars getAllDonarsList(@PathVariable("id") Long id) throws Exception {
		return donarRepo.findById(id).orElseThrow(() -> new Exception("Donar not found."));
	}

	@PutMapping("/")
	public ResponseEntity<Donars> updateDonar(@RequestBody Donars donar) {
		Donars entity = this.donarRepo.getOne(donar.getDonarId());
		entity.setAge(donar.getAge());
		entity.setBloodGroup(new BloodGroups(donar.getBloodGroup().getId(), donar.getBloodGroup().getName()));
		entity.setFirstName(donar.getFirstName());
		entity.setLastName(donar.getLastName());

		return new ResponseEntity<Donars>(donarRepo.save(entity), HttpStatus.OK);
	}

	@PostMapping("/")
	public ResponseEntity<Donars> createDonar(@RequestBody Donars donar) {
		return new ResponseEntity<Donars>(donarRepo.save(donar), HttpStatus.CREATED);
	}

	@DeleteMapping("/")
	public void deleteDonar(@RequestBody Donars donar) {
		donarRepo.delete(donar);
	}
}
