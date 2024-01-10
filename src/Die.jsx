import React from 'react'

const Die = (props) => {
  return (
    <div className='square' key={props.id} onClick={props.holdDice}
     style={{ backgroundColor: props.isHeld? '#59E391' : 'white'}}>
       <h1>{props.value}</h1> 
    </div>
  )
}

export default Die