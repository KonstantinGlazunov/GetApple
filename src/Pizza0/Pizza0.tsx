import { useState } from "react";

export default function Pizza0(): JSX.Element {
  const [pizzaIngredients, setPizza] = useState<string>(""); //отслеживает необходимость обноления компонента, необходим для изменения сотояния компонента
  const [pizzaIngredients2, setPizza2] = useState<PizzaInterface> (); 


  type ingredients = "sausage" | "tomato" | "cheese";
  type sizeNumber = 1 | 2;

  interface PizzaInterface {
    size: sizeNumber;
    ingredient: ingredients[];
    prise: number;
  }

  const pizza: PizzaInterface = {
    size: 2,
    ingredient: [],
    prise: 0,
  };

  function pizzaCooking(ingredient: ingredients): void {
    setPizza(pizzaIngredients + " " + `${ingredient}`);
   pizzaCooking2(ingredient);
  }

  function pizzaCooking2(ingredient: ingredients): void {
   // setPizza2( [...pizza.ingredient, ingredient]);
  }


  return (
    <div>
     {/*простой вариант */} <h2>{pizzaIngredients}</h2> 
      
      <h2>
        {}
        {pizza.size} {pizza.prise}
      

      </h2>
      <button type="button" onClick={() => pizzaCooking("sausage")}>
        Add sausage
      </button>
      <button type="button" onClick={() => pizzaCooking("tomato")}>
        Add tomato
      </button>
      <button type="button" onClick={() => pizzaCooking("cheese")}>
        Add cheese
      </button>
    </div>
  );
}
