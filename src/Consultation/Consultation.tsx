import { log } from 'console';
import { async } from 'q';
import React, { useEffect, useState } from 'react'

export default function Consultation():JSX.Element {
    
    
    const [weight, setWeight] = useState(60);
    function handleTakeWeight():void {
        setWeight(weight + 5);
    }
    
    const [numberOfTeeth, setNumberOfTeeth] = useState(0);
    function handelToothGrowth():void{
setNumberOfTeeth(numberOfTeeth+1);
    }
    //useEffect это функция которая будет вызывать другую функцию в определенный момент 
    //mount - отрисовка установка, 
    //update - обновление изменение
    //unmount - когда перестает отрисовываться
    //пустой массив зависимостей при первой отрисовки
    useEffect(()=>{  //принимает функцию которая будет вызна при первичной отрисовке
        console.log("useEffect1");
    }, [])

    //без зависимости при первой отрисовки и при любых изминениях
    useEffect(()=>{  
        console.log("useEffect2");
    })

    //с указанием зависимости или нескольких зависимостей 
    // on first render and on chanche this dependences
    //обновить содержание страницы при первой отрисовки и  когда обновилась переменная 
    useEffect(()=>{  
        console.log("useEffect3");
    },[numberOfTeeth])
    useEffect(()=>{  
        console.log("useEffect4");
    },[weight])
    useEffect(()=>{  
        console.log("useEffect5");
    },[weight, numberOfTeeth])



    const [url, setUrl] = useState<string>('');
//fetch
async function loadDogImage():Promise<void> {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const obj = await res.json();
    const {message} = obj;
    setUrl(message);
}

useEffect(()=> {
    loadDogImage();
},[weight, numberOfTeeth]);



  return (
    <div>
<h1>Repiat UseEffect</h1>
<p>Number of teeth: {numberOfTeeth}</p>
<p>Weight: {weight}</p>
<button type="button" onClick={handelToothGrowth}>Grow tooth</button>
<button type="button" onClick={handleTakeWeight}>Grow weight</button>
<div>
<img style={{width: '400px'}}  src={url} alt = "dog" />
</div>
    </div> 
  )
}
