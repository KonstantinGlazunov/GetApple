import { useState } from "react";
import styles from './EatPage.module.css'


export default function EatApple(): JSX.Element {
  const [condition, setCondition] = useState<string>("Apple");
  const [buttonCondition, setButtonCondition] = useState<string>("Eat apple!");

  function eat(): void {
   if (condition === "stub"){
       setCondition("Apple");
       setButtonCondition("Eat Apple")
   }else{
       setCondition("stub");
       setButtonCondition("Get Apple")
   }
  }



  return (
    <div>
      <h2>{condition}</h2>
      <button className={styles.appleButton} type="button" onClick={eat}>
        {buttonCondition}
      </button>
      <br></br>
    </div>
  );
}

//кнопка меняла свое название (не наставиаю) ,
//последующий клик на кнопку должен возвращать яблоко

//несколько кнопочек: добавить сыр, помидоры, колбасу.....
//пица должна собираться  в виде строки(картинок).  Каждый компонент может быть добавлен несколько раз.
// + кнопка очистка
//+ цена
