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
import MyApp from "./MyApp/MyApp"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode>
  <div>
    <Pizza />
    {/* <BrowserRouter>
<MyApp />
    </BrowserRouter> */}
  </div>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
