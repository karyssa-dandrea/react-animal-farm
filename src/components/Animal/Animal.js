import React from 'react'

export default function Animal(props) {
  return (
    <>
      <div className="Animal" style={{ top: props.top, left: props.left }}>
        <img height="100" src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
        <span>{props.name}</span>
        <span>{props.top}</span>
        <span>{props.left}</span>
      </div>
    </>
  )
}
