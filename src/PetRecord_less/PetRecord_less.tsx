import React from "react";
import styles from './PetRecord_less.module.css';

export interface Pet {
  id: number;
  petName: string;
  additionalInfo: string;
  dysplayInfo: boolean;
  color?:string;
}
interface Props{
    pet:Pet;
}

export default function PetRecord_less({pet}: Props): JSX.Element {

  const { id, petName, additionalInfo, dysplayInfo, color } = pet;

  return (
    <div className={styles.container}>
      <h2 style={{backgroundColor: color, fontSize:'20px'}}>
        {id}. {petName}  
      </h2>
      <p>{dysplayInfo&&additionalInfo}</p>
    </div>
  );
}
