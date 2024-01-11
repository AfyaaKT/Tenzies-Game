import React from 'react'

const Die = (props) => {

  let dieFace ;

  switch(props.value){
    case 1:
      dieFace = 'face-one';
      break;
    case 2:
      dieFace = 'face-two';
      break;
    case 3:
      dieFace = 'face-three';
      break;
    case 4:
      dieFace = 'face-four';
      break;
    case 5:
      dieFace = 'face-five';
      break;
    default:
      dieFace = 'face-six'; 
      break; 
      
  }

  const dots =[]
  for (let i = 1 ; i<= props.value ; i++){
    dots.push(<span key={i} className='dot'></span>)
  }
  return (
    <div className={`square ${dieFace}`} key={props.id} onClick={props.holdDice}
     style={{ backgroundColor: props.isHeld? '#59E391' : 'white'}}>
       {dots}
    </div>
  )
}

export default Die