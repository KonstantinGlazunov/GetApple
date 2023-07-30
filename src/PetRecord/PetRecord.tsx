/*Создайте компонент PetRecord. В качестве параметров компонент должен принимать number id, 
строку petName, строку additionalInfo, boolean dysplayInfo. Компонент должен отображать на 
странице полученную информацию в виде блока:
##  ИМЯ   
Дополнительная информация
Причем, дополнительная информация должна отображаться, только если dysplayInfo ==true
 
2)
Создайте компонент, в котором создайте 3 объекта Petи для каждого из них вызовете 
компонент PetRecord передавая необходимые параметры. 
*/
import React from "react";
type Props= {
  id: number,
  petName: string,
  additionalInfo: string,
  dysplayInfo: boolean,
};

export default function PetRecord(p:Props
): JSX.Element {
 
  

  let {id , petName, additionalInfo, dysplayInfo} = p;

if (dysplayInfo) {}

  return <div>
    <p>
    ## {petName.toUpperCase()}
    </p>
    <p>
   {dysplayInfo? additionalInfo: ""}   
    </p>
  </div>;
}
