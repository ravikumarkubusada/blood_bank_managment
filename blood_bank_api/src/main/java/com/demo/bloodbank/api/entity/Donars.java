package com.demo.bloodbank.api.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entity implementation class for Entity: Donars
 *
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Donars implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "Person_id")
	private Long personId;

	private String lastName;
	private String firstName;
	private int age;
	private int bloodGroupId;
	private LocalDateTime updatedOn;

}
