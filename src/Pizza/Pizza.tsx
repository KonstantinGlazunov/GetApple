import { switchCase } from "@babel/types";
import { log } from "console";
import React, { useState } from "react";
import P from "./p.gif";
import p_ch_tom_sa from "./p_ch_tom_sa.gif";
import p_ch_sa from "./p_ch_sa.gif";
import p_ch_tom from "./p_ch_tom.gif";
import p_ch from "./p_ch.gif";
import p_sa_tom from "./p_sa_tom.gif";
import p_tom from "./p_tom.gif";
import p_sa from "./p_sa.gif";
import styles from "./Pizza.module.css";

export default function Pizza(): JSX.Element {
  type Ingredient = "sausage" | "tomato" | "cheese";
  interface PizzaInterface {
    ingredients: Ingredient[];
    size: "big" | "small";
    price: number;
    picture: string;
  }

  let defaultPizza: PizzaInterface = {
    ingredients: [],
    size: "big",
    price: 6,
    picture: P,
  };

  const [pizzaCondition, setPizza] = useState<PizzaInterface>(defaultPizza);

  function addIngredient(ing: Ingredient): void {
    let addPrice = 0;
    switch (ing) {
      case "sausage":
        addPrice = 3;
        pizzaCondition.picture = p_sa;
        if (
          pizzaCondition.ingredients.includes("cheese") &&
          pizzaCondition.ingredients.includes("tomato")
        ) {
          pizzaCondition.picture = p_ch_tom_sa;
        } else {
          if (pizzaCondition.ingredients.includes("cheese")) {
            pizzaCondition.picture = p_ch_sa;
          }
          if (pizzaCondition.ingredients.includes("tomato")) {
            pizzaCondition.picture = p_sa_tom;
          }
        }
        break;

      case "cheese":
        addPrice = 2;
        pizzaCondition.picture = p_ch;
        if (
          pizzaCondition.ingredients.includes("sausage") &&
          pizzaCondition.ingredients.includes("tomato")
        ) {
          pizzaCondition.picture = p_ch_tom_sa;
        } else {
          if (pizzaCondition.ingredients.includes("sausage")) {
            pizzaCondition.picture = p_ch_sa;
          }
          if (pizzaCondition.ingredients.includes("tomato")) {
            pizzaCondition.picture = p_sa_tom;
          }
        }
        break;

      case "tomato":
        addPrice = 1;
        pizzaCondition.picture = p_tom;

        if (
          pizzaCondition.ingredients.includes("sausage") &&
          pizzaCondition.ingredients.includes("cheese")
        ) {
          pizzaCondition.picture = p_ch_tom_sa;
        } else {
          if (pizzaCondition.ingredients.includes("sausage")) {
            pizzaCondition.picture = p_sa_tom;
          }
          if (pizzaCondition.ingredients.includes("cheese")) {
            pizzaCondition.picture = p_ch_tom;
          }
        }
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
  function clear(): void {
    setPizza(() => ({ ...defaultPizza }));
  }
  return (
    <div>
      <h2> Pizza maker</h2>
      <img
        className={styles[pizzaCondition.size]}
        src={pizzaCondition.picture}
        alt="pizza"
      />
      <h3>Make your pizza:</h3>
      <div>
        <div>Size: {pizzaCondition.size} </div>
        Ingridients: {pizzaCondition.ingredients.join(", ")}
        <p>________</p>
        <div>Price: {pizzaCondition.price}$</div>
      </div>
      <button className={styles.button} onClick={() => setSize()}>
        Size
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => addIngredient("sausage")}
      >
        Add sausage
      </button>
      <button className={styles.button} onClick={() => addIngredient("cheese")}>
        Add cheese
      </button>
      <button className={styles.button} onClick={() => addIngredient("tomato")}>
        Add tomato
      </button>
      <button className={styles.button} onClick={() => clear()}>
        Clear
      </button>
    </div>
  );
}
