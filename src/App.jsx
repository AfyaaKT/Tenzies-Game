import { useEffect, useState } from 'react';
import './App.css';
import Die from './Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';



function App() {

  const allNewDice = () =>{
    const diceArray = []
  for(let i=1; i <= 10 ;i++ ){
    
    const random = Math.floor(Math.random() * 6) + 1
     diceArray.push({value:random , isHeld:false , id:nanoid() })
  }
  return diceArray

  }
  

  const [dice , setDice]=useState(allNewDice())

  const [tenzies , setTenzies] = useState(false)

 const rollDice = () =>{
  setDice(oldDice=>oldDice.map(die=>{
    return  die.isHeld? die : {value:Math.floor(Math.random() * 6) + 1 , isHeld:false , id:nanoid() }
  }))
 }
 const startNewGame = () =>{
  setDice(oldDice=> oldDice.map(die=> {
    return tenzies && {value:Math.floor(Math.random() * 6) + 1 , isHeld:false , id:nanoid() }
  }))
  setTenzies(false)
 }

 function holdDice(id){
   setDice(oldDice=> oldDice.map(die=>(
    die.id === id?
    {...die,
      
    isHeld:!die.isHeld}:
    die
  ))
    )
}

useEffect(()=>{
  const firstValue = dice[0].value
  const allSame =dice.every(die=> firstValue === die.value)  
  const allHeld = dice.every(die=> die.isHeld)
  
  if (allSame && allHeld ){
    setTenzies( true)

  }
   
 

},[dice])

  return (
    <main >
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='die-container'>
      {dice.map(die=>(
      <Die value ={die.value} id = {die.id} holdDice={()=>holdDice(die.id)} isHeld ={die.isHeld}/>

      ))}
      </div>
      <button className='roll--button' onClick={tenzies ? startNewGame : rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  );
}

export default App;
