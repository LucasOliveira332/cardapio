package com.example.cardapio.models;

import com.example.cardapio.controller.FoodResponseDTO;
import com.example.cardapio.dto.foodDto.FoodRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Food
 */
@Table(name = "foods")
@Entity(name= "foods")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {
  @Id  @GeneratedValue(strategy =  GenerationType.IDENTITY)
  private Long id;
  private String title;
  private String image;
  private Double price;

  public Food(FoodRequestDTO foodRequestDTO){
    this.title = foodRequestDTO.title();
    this.image = foodRequestDTO.image();
    this.price = foodRequestDTO.price();
  }
}