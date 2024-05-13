package com.example.cardapio.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Food
 */
@Table(name = "foods")
@Entity(name= "foods")
public class Food {
  @Id  @GeneratedValue(strategy =  GenerationType.IDENTITY)
  private long id;
  private String title;
  private String image;
  private Integer price;
}