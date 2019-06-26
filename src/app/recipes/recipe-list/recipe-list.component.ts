import { Component, OnInit, OnDestroy} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router,
    private route: ActivatedRoute) { }  //typescript shortcut of instantly assinging a property with the same name 

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe((recipes:Recipe[]) => {this.recipes = recipes})
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(
    
  ){
    this.subscription.unsubscribe();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }


}
