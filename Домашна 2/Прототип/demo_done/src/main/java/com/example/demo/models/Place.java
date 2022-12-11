package com.example.demo.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;


@Data
@Entity
@Table(name = "places")
@NoArgsConstructor
@AllArgsConstructor
public class Place implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 898002081458478671L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "Place must have a name")
    @Column(unique = true)
    private String name;
    @NotEmpty(message = "Author must not be empty")
    private String amenity;
    @Positive(message = "Error")
    private double coordinate_x;
    private double coordinate_y;

}
