package com.example.cardapio.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cardapio.dto.foodDto.FoodReponseDTO;
import com.example.cardapio.dto.foodDto.FoodRequestDTO;
import com.example.cardapio.models.Food;
import com.example.cardapio.repositories.FoodRepository;

@RestController
@RequestMapping("food")
public class FoodController {

  @Autowired
  private FoodRepository repository;
  @GetMapping
  public List<FoodReponseDTO> getAll(){
    List<FoodReponseDTO> foodList = repository.findAll().stream().map(FoodReponseDTO::new).toList();

    return foodList;
  }

  @PostMapping
  public void post(@RequestBody FoodRequestDTO foodRequestDTO){
    Food food = new Food(foodRequestDTO);
    repository.save(food);

    return;
  }
}
