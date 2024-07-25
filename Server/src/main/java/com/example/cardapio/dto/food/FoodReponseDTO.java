package com.example.cardapio.dto.food;

import com.example.cardapio.models.Food;

public record FoodReponseDTO(long foodId, String title, String image, Double price ) {
  public FoodReponseDTO(Food food){
    this(food.getFoodId(), food.getTitle(), food.getImage(), food.getPrice());
  }
}