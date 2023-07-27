import { useState } from "react";

export default function Counter():JSX.Element{
    
    const[counter,setCounter] = useState(10);
    //нужен когда есть перерменные которые нужно отражать 
//на странице, переначитывать переррендерить
    function add():void{
        setCounter(counter+1);
    }

    return(
        <>
            <button type="button"  onClick = {add} >Click Me!</button>
            <h2>Counter value: {counter}</h2>    
        </>
    )

}