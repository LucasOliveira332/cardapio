package com.example.cardapio.dto.foodDto;

import com.example.cardapio.models.Food;

public record FoodReponseDTO(long id, String title, String image, Integer price ) {
  public FoodReponseDTO(Food food){
    this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
  }
}