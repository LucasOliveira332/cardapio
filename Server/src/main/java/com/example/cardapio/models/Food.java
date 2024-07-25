package com.example.cardapio.models;

import com.example.cardapio.dto.food.FoodRequestDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * Food
 */
@Table(name = "Food")
@Entity(name= "Food")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "foodId")
public class Food {
  @Id  @GeneratedValue(strategy =  GenerationType.IDENTITY)
  @Column(name = "foodid")
  private Long foodId;
  private String title;
  private String image;
  private Double price;

  public Food(FoodRequestDTO foodRequestDTO){
    this.title = foodRequestDTO.title();
    this.image = foodRequestDTO.image();
    this.price = foodRequestDTO.price();
  }
}