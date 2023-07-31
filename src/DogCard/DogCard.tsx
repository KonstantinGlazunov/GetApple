import React, { useEffect, useState } from 'react'

export default function DogCard(): JSX.Element {
  const [url, setUrl] = useState<string>('');
  const serviceUrl:string = 'https://dog.ceo/api/breeds/image/random';
  //let url: string = '';

  function setImageUrl():void {
    fetch(serviceUrl)
    .then((res:Response)=>res.json())
    .then((resultObj)=> {
     const message =  resultObj.message;
     setUrl(message);  //url = message
    }) 
  }
  //setImageUrl();
  useEffect(()=>{setImageUrl()}, []);


  
  return (
    <div>
<img src ={url} alt="Dog" />
    </div>
  )
}
// https://www.boredapi.com/api/activity
//сделать компонент идет на это IP и выдает что сейчас делать. 