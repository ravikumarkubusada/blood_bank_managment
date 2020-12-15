package com.demo.bloodbank.api.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.annotations.UpdateTimestamp;

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
	@Column(name = "Donar_id")
	private Long donarId;

	private String firstName;
	private String lastName;
	private int age;

	@OneToOne(cascade = CascadeType.ALL)
	private BloodGroups bloodGroup;

	@UpdateTimestamp
	private LocalDateTime updatedOn;

}
