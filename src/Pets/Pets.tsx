/*
Создайте компонент, в котором создайте 3 объекта Pet и для каждого из них вызовете 
компонент PetRecord передавая необходимые параметры. 
*/
import React from 'react'
import PetRecord, { PetsProps } from '../PetRecord/PetRecord'

export default function Pets(): JSX.Element {
    /*interface Pet{
            id: number,
            petName: string,
            additionalInfo: string,
            displayInfo: boolean,
          };*/
          const cat: PetsProps ={ 
            id: 2,
            petName: "Murka",
            additionalInfo: "black and white",
            displayInfo: true,
          }
          const lion ={ 
            id: 3,
            petName: "Simba",
            additionalInfo: "Live in Afrika",
            displayInfo: true,
          }
          const pinguin ={ 
            id: 4,
            petName: "Komandor",
            additionalInfo: "Live in Madagaskar",
            displayInfo: false,
          }

  return (
    <div>
    <div>{PetRecord(cat)}</div>
    <div>{PetRecord(lion)}</div>
    <div>{PetRecord(pinguin)}</div>
    </div>
  )
}
