import React from 'react'
import './Main.css'
import { animals } from '../../data.js'
import backgroundImg from '../../background.png'
import Animal from '../Animal/Animal.js'

const animalArr = animals

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {animalArr.map((item) => {
        return (
          <Animal
            className=".animal .name img"
            key={item.name}
            name={item.name}
            type={item.type}
            says={item.says}
            top={item.top}
            left={item.left}
          />
        )
      })}
    </main>
  )
}
