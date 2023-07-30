import { switchCase } from "@babel/types";
import { log } from "console";
import React, { useState } from "react";

export default function Pizza(): JSX.Element {
  type Ingredient = "sausage" | "tomato" | "cheese";
  interface PizzaInterface {
    ingredients: Ingredient[];
    size: "big" | "small";
    price: number;
  }

  let defaultPizza: PizzaInterface = {
    ingredients: [],
    size: "big",
    price: 6,
  };

  const [pizzaCondition, setPizza] = useState<PizzaInterface>(defaultPizza);

  function addIngredient(ing: Ingredient): void {
    let addPrice = 0;
    switch (ing) {
        case "sausage":
            addPrice = 3;
            break;
            case "cheese":
                addPrice = 2;
                break;
                case "tomato":
            addPrice = 1;
            break;
    }
    setPizza((lastChoosePizza) => ({
      ...lastChoosePizza,
      ingredients: [...lastChoosePizza.ingredients, ing],
      price: lastChoosePizza.price + addPrice,
    }));
  }
  function setSize(): void {
    setPizza((lastChoosePizza) => ({
      ...lastChoosePizza,
      size: lastChoosePizza.size === "small" ? "big" : "small",
      price:
        lastChoosePizza.size === "small"
          ? lastChoosePizza.price * 2
          : lastChoosePizza.price / 2,
    }));
  }
  function clear():void {
    setPizza(()=>(
        {...defaultPizza,}
    ))
  }

  return (
    <div>
      <div>
        Make pizza: size: {pizzaCondition.size} Price: {pizzaCondition.price}{" "}
        Ingridients: {pizzaCondition.ingredients.join(", ")}
      </div>
      <button type="button" onClick={() => addIngredient("sausage")}>
        Add sausage
      </button>
      <button type="button" onClick={() => addIngredient("cheese")}>
        Add cheese
      </button>
      <button type="button" onClick={() => addIngredient("tomato")}>
        Add tomato
      </button>
      <button type="button" onClick={() => setSize()}>
        size
      </button>
      <button type="button" onClick={() => clear()}>
        Clear
      </button>
    </div>
  );
}
