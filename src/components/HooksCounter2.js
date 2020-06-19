import React,{useState} from 'react'

function HooksCounter2() {
    const initialCount=0
    const [count , SetCount] = useState(initialCount)
    const incrementFive =() => {
        for(let i= 0; i< 5; i++){
            SetCount(prevCount => prevCount+1)
        }
    }
    return (
        <div>
           Count:{count} 
              <button onClick={() => SetCount(initialCount)}>Reset</button>
              <button onClick={() => SetCount(prevCount => prevCount+1)}>Increment</button>
              <button onClick={() => SetCount(prevCount => prevCount-1)}>Decrement</button>
              <button onClick={incrementFive}>Increment 5</button>
        </div>


    )
}

export default HooksCounter2
