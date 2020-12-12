package com.demo.bloodbank.api.entity.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.bloodbank.api.entity.BloodGroups;

public interface BloodGroupsRepository extends JpaRepository<BloodGroups, Long> {

}
