import { Router } from 'express'
import React from 'react'
import Layout from '../Layout/Layout'
import Pizza from '../Pizza/Pizza'
import { Route, Routes } from 'react-router'
import Counter from '../Counter/Counter'

import App from "../App/App";
import Msg from "../Msg/Msg";
import Animal from "../Animal/Animal";
import HunterParent from "../HunterParent/HunterParetn";

import EatApple from "../EatApple/EatApple";
import PetRecord from "../PetRecord/PetRecord";
import Pets from "../Pets/Pets";
import PetProcessing from "../PetProcessing/PetProcessing";
import DogCard from "../DogCard/DogCard";
import Consultation from "../Consultation/Consultation";
import Activity from "../Activity/Activity";

export default function MyApp(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element = {<Layout />}>
<Route path="home" element={<MyApp />} />
<Route path="counter" element={<Counter />} />
<Route path="pizza" element={<Pizza />} />

      </Route>
      </Routes>
  )
}

//сделать новый проект в котором сделать три компонента (выводят по 1 строке)
// сделать роутинг между ними. 