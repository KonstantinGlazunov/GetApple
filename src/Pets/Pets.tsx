/*
Создайте компонент, в котором создайте 3 объекта Pet и для каждого из них вызовете 
компонент PetRecord передавая необходимые параметры. 
*/
import React from 'react'
import PetRecord from '../PetRecord/PetRecord'

export default function Pets(): JSX.Element {
    /*interface Pet{
            id: number,
            petName: string,
            additionalInfo: string,
            displayInfo: boolean,
          };*/
          let cat ={ // не понял как сюда передать type PetsProps ?
            id: 2,
            petName: "Murka",
            additionalInfo: "black and white",
            displayInfo: true,
          }
          let lion ={ 
            id: 3,
            petName: "Simba",
            additionalInfo: "Live in Afrika",
            displayInfo: true,
          }
          let pinguin ={ 
            id: 3,
            petName: "Komandor",
            additionalInfo: "Live in Madagaskar",
            displayInfo: true,
          }

  return (
    <div>
    <div>{PetRecord(cat)}</div>
    <div>{PetRecord(lion)}</div>
    <div>{PetRecord(pinguin)}</div>
    </div>
  )
}
