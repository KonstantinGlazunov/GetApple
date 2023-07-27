import React from 'react'
import Hunter from '../Hunter/Hunter'

export default function HunterParetn():JSX.Element {
    const hunter = {
        name: "John",
        age: 46,
        isDrunk: true
    }
  return (
    <div>
<p> _____________________________________</p>
<p> Consultation</p>
<p> _____________________________________</p>
<Hunter hunter={hunter} /> 
    </div>
  )
}
