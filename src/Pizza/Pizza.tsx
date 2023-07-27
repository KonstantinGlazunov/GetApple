import { useState } from "react";

export default function Pizza(): JSX.Element {
  const [pizzaIngridients, setPizza] = useState<string>("");
  const [sausage, setSausage] = useState<string>("Add sausage");
  let pizzaStr: string;


  type ingridients = "sausage" | "tomato" | "cheese";
  type sizeNumber = 1 | 2;

  interface PizzaInterface {
    size: sizeNumber;
    ingridient: ingridients[];
    prise: number;
  };

  const pizza: PizzaInterface = {
    size: 2,
    ingridient: [],
    prise: 0,
  };

  function pizzaCooking(ingridient:ingridients): void {
    setPizza(pizzaIngridients + `${ingridient}`);
pizza.ingridient = [...pizza.ingridient, ingridient]
 
}


  return (
    <div>
         <h2>{pizzaIngridients}</h2> {/*простой вариант */}

      <h2>{pizza.ingridient.map((ingridient, index)=>
      (ingridient)
      )}{pizza.size} {pizza.prise}</h2>
      <button
         type="button"
        onClick={()=>pizzaCooking("sausage")}
      >
        Add sausage
      </button>
      <button
         type="button"
        onClick={()=>pizzaCooking("tomato")}
      >
        Add tomato
      </button>
      <button
         type="button"
        onClick={()=>pizzaCooking("cheese")}
      >
        Add cheese
      </button>
 
    </div>
  );
}
