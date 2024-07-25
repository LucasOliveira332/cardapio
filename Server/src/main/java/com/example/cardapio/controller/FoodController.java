package com.example.cardapio.controller;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.cardapio.dto.food.FoodReponseDTO;
import com.example.cardapio.dto.food.FoodRequestDTO;
import com.example.cardapio.models.Food;
import com.example.cardapio.repositories.FoodRepository;

@RestController
@RequestMapping("food")
public class FoodController {

  @Autowired
  private FoodRepository repository;

  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @GetMapping
  public List<FoodReponseDTO> getAll(){
    List<FoodReponseDTO> foodList = repository.findAll().stream().map(FoodReponseDTO::new).toList();
    return foodList;
  }
  
  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @PostMapping
  public void save(@RequestBody FoodRequestDTO foodRequestDTO){
    Food food = new Food(foodRequestDTO);
    repository.save(food);
    return;
  }

  @CrossOrigin(origins = "*", allowCredentials = "*")
  @PutMapping("/{foodId}")
  public ResponseEntity<FoodReponseDTO> update(@PathVariable long foodId, FoodRequestDTO foodRequestDTO){
    Food food = new Food(foodRequestDTO);
    repository.save(food);
    FoodReponseDTO foodReponseDTO = new FoodReponseDTO(food);

    return ResponseEntity.ok(foodReponseDTO);
  }

  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @DeleteMapping("/{foodId}")
  public void delete(@PathVariable long foodId){
    repository.deleteById(foodId);
  }
}
