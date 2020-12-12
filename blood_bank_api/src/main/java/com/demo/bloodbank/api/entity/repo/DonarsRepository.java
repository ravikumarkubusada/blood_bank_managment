package com.demo.bloodbank.api.entity.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.bloodbank.api.entity.Donars;

@Repository
public interface DonarsRepository extends JpaRepository<Donars, Long> {

}
