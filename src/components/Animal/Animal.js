import React from 'react'

export default function Animal(props) {
  return (
    <>
      <div className="Animal">
        <img
          height="100"
          src={`${process.env.PUBLIC_URL}/animals/$ 
        {props.type}.svg`}
        />
        <span>{props.name}</span>
      </div>
    </>
  )
}
