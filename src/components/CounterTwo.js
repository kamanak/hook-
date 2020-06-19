import React,{useReducer} from 'react'
  

const initialState = {
    firstCounter:0,
    secoundCounter: 10
}
const reducer = (state,action) =>{
    switch (action.type){
        case 'increment' :
            return { ...state,firstCounter : state.firstCounter + action.value}
        case 'decrement' :
            return { ...state,firstCounter : state.firstCounter - action.value}
        case 'increment2' :
                return {...state,secoundCounter : state.secoundCounter + action.value}
        case 'decrement2' :
                return { ...state,secoundCounter: state.secoundCounter - action.value}

        case 'reset' :
            return initialState
        default:
            return state
    }

 }
function CounterTwo() {
   const[count,dispatch] = useReducer(reducer,initialState)

    
    return (
        <div>
             <div> Count :{count.firstCounter}</div>
             <div>SecoundCounter :{count.secoundCounter}</div>
            <button onClick = {() => dispatch({type:'increment' , value :1})}>
            IncrementOne</button>
            <button onClick = {() => dispatch({type: 'decrement',value :1})}>
            DecrementoOne</button>
            <button onClick = {() => dispatch({type: 'increment',value :5})}>
            IncrementFive</button>
            <button onClick = {() => dispatch({type: 'decrement',value :5})}>
            DecrementFive</button>
             <div>
            <button onClick = {() => dispatch({ type:'increment2' , value :1})}>
            IncrementCounterTwo</button>
            <button onClick = {() => dispatch({type: 'decrement2',value :1})}>
            DecrementoCounterTwo</button>
            </div>
            <button onClick = {() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
