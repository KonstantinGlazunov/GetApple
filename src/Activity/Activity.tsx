import { async } from "q";
import React, { useEffect, useState } from "react";

export default function Activity(): JSX.Element {
  const url = 'https://www.boredapi.com/api/activity';

  const [actualActivity, setActivity] = useState<string>('');

  async function getActivity():Promise<void> {  // Promise<void> по отношению getActivity() , типизация функции  
    const res: Response = await fetch(url);
    const obj = await res.json();
    const {activity} = obj;
    setActivity(activity);
  }
//любой код который меняет состояние отображения страницы должен илти в useEffect
  //так и не могу понять зачем это нужно.  Без него работает. ...
  useEffect(() => {
    getActivity();
  }, []);
// почему {getActivity}  без скобок это же функция - не вызываем, а перердаем/объявляем (как переменную) 
  return <div>
    {actualActivity}
    <div>
    <button type="button" onClick={getActivity}>Get activity</button>
    </div>
  </div>;
}
