package com.demo.bloodbank.api.entity;

import java.io.Serializable;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entity implementation class for Entity: BloodGroups
 *
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BloodGroups implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	@Column(name = "bloodgroup_id")
	private Long id;
	
	private String name;
	
}
