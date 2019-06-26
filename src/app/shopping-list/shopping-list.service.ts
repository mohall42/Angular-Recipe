import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";


export class ShoppingListService {
    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice(); //remember this is the return a copy of the array. 
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients)  //the dots are the spread operator. It turns an array of elements into a list of elements because the push method here is able to handel multiple objects.
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(
        index: number, 
        newIngredient: Ingredient)
        {
            this.ingredients[index] = newIngredient;
            this.ingredientsChanged.next(this.ingredients.slice());
        }

    deleteIngredient(
        index: number)
        {
            this.ingredients.splice(index, 1);
            this.ingredientsChanged.next(this.ingredients.slice());
        }
}