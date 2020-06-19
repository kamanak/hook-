 import React  from 'react'
import DataFetchingOne from './components/DataFetchingOne';
import ComponentA from './componentsone/ComponentA';
import ComponentB from './componentsone/ComponentB';
import ConponentC from './componentsone/ConponentC';

export const CountContext = React.createContext()


// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
const initialState = 0
const reducer = (state,action) =>{
    switch (action){
        case 'increment' :
            return state+1
        case 'decrement' :
            return state -1

        case 'reset' :
            return initialState
        default:
            return state
    }

 }

function App() {
  const[count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
    
      {/* <UserContext.Provider value={'kamana'}>
         <ChannelContext.Provider value={'Codeevolution'}>
           <ComponentC></ComponentC>
         </ChannelContext.Provider>
     
      </UserContext.Provider> */}
      <div>
      <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
      count-{count}
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
      <ConponentC></ConponentC>
      </CountContext.Provider>
</div>

    </div>
  )
}

export default App
