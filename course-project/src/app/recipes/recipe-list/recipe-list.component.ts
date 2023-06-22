import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'THis is simply a test',
      'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg?crop=1.00xw:1.00xh;0,0&resize=980:*'
    ),
  ];
}
