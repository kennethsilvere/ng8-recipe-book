import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Brown sugar", 2),
    new Ingredient("All purpose flour", 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
