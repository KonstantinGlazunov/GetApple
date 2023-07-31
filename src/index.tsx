import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App/App";
import Msg from "./Msg/Msg";
import Counter from "./Counter/Counter";
import Animal from "./Animal/Animal";
import HunterParent from "./HunterParent/HunterParetn";

import EatApple from "./EatApple/EatApple";
import Pizza0 from "./Pizza0/Pizza0";
import Pizza from "./Pizza/Pizza";
import PetRecord from "./PetRecord/PetRecord";
import Pets from "./Pets/Pets";
import PetProcessing from "./PetProcessing/PetProcessing";
import DogCard from "./DogCard/DogCard";
import Consultation from "./Consultation/Consultation";
import Activity from "./Activity/Activity";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode>
  <div>
<p>_________________Activity_______________________</p>
<Activity />
    <p>_____________________________________
      <Consultation />
    </p>
    <p>_________________DogCard_____________________</p>
    <DogCard />
    <p>_______________PetProcessing</p>
    <PetProcessing></PetProcessing>
    <p>*PetRecord___________________________</p>
  <Pets />
    <p>______________________________</p>
    <p>PetRecord</p>
    <PetRecord  id={1} petName= "Dic"
  additionalInfo= "dog"
  displayInfo= {true} />
    <p>____________________________________</p>
    <Pizza />
    <p>____________________________________</p>
    <Pizza0 />
    <EatApple />
    <HunterParent />
    <Animal title='Pig' description= 'I like Theatre' age={2}/>
    <Animal title='Lion' description='I like to walk' age={5}/>
    
    <Counter />
    <Msg msg="everybody" title="!!!" />
    {/* <App /> */}
  </div>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
