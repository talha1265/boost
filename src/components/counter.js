import React from 'react'

const Counter = () => {
    let number = 0;
    const handleClick = ()=>{
        number++
    }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>Incre</button>
    </div>
  )
}

export default Counter
