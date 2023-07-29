import { log } from "console";
import React, { useState } from "react";

export default function Pizza(): JSX.Element {
  type Ingredient = "sausage" | "tomato" | "cheese";
  interface PizzaInterface {
    ingredients: Ingredient[];
    size: 1 | 2;
    price: number;
  }

  let pizza: PizzaInterface = {
    ingredients: [],
    size: 1,
    price: 0,
  };

  const [pizzaCondition, setPizza] = useState<PizzaInterface>(pizza);

  /// Не понимаю как мне теперь изменять объект Pizza  //
  function addIngredient(ing: Ingredient ): void {
    setPizza((lastChoosePizza) => ({
      ...lastChoosePizza,
      ingredients: [...lastChoosePizza.ingredients, ing],
      price:  lastChoosePizza.price+1
      
    }));
  }
  function setSize(chooseSize: 1|2 ): void {
    setPizza((lastChoosePizza) => ({
      ...lastChoosePizza,
      size: chooseSize,
    }));
  
  }

  return (
    <div>
      <div>
        Make pizza: {pizzaCondition.ingredients.join(", ")}  size: {pizzaCondition.size} 
         Price: {pizzaCondition.price}
      </div>
      <button type="button" onClick={() => addIngredient("sausage")}>
        Add sausage
      </button>
      <button type="button" onClick={() => addIngredient("tomato")}>
        Add tomato
      </button>
      <button type="button" onClick={() => addIngredient("cheese")}>
        Add cheese
      </button>
      <button type="button" onClick={() => setSize(2)}>
        size 2
      </button>
    </div>
  );
}
