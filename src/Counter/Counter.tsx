import { useState } from "react";
import Msg from "../Msg/Msg";

export default function Counter():JSX.Element{
    
    const[counter,setCounter] = useState(10);
    //нужен когда есть перерменные которые нужно отражать 
//на странице, переначитывать переррендерить
    function add():void{
        setCounter(counter+1);
    }

    return(
        <>
        <p>___________________Counter _________________</p>
            <button type="button"  onClick = {add} >Click Me!</button>
            <h2>Counter value: {counter}</h2>   
            <Msg msg="Counter" title={counter==12? "Yes" : "Hallo"} />  
        </>
    )

}