import { async } from "q";
import React, { useEffect, useState } from "react";

export default function Activity(): JSX.Element {
  const url = 'https://www.boredapi.com/api/activity';

  const [actualActivity, setActivity] = useState<string>('');

  async function getActivity():Promise<void> {  //Что такое Promise<void> по отношению getActivity() , зачем оно здесь ?  
    const res = await fetch(url);
    const obj = await res.json();
    const {activity} = obj;
    setActivity(activity);
  }

  //так и не могу понять зачем это нужно.  Без него работает. ...
  useEffect(() => {
    getActivity();
  }, []);
// почему {getActivity}  без скобок это же функция!? 
  return <div>
    {actualActivity}
    <div>
    <button type="button" onClick={getActivity}>Get activity</button>
    </div>
  </div>;
}
