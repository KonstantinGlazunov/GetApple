import React from 'react'
interface Props {
    title: string;
    description: string;
    age: number;
}
export default function Animal(props:Props) : JSX.Element{
  const {title, description, age} = props;
  
    return (
    <div>
  <h1>{title}</h1>
  <p>{description} -  {age}</p>
    </div>
    );
}
