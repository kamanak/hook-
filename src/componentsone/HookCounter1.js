import React,{useState,useEffect} from 'react'

function HookCounter1() {
    const [count,setCount]= useState(0)
    const[name,setNmae]= useState('')
    useEffect(()=> {
        console.log('Updating document type')
        document.title = `You clicked ${count} times`
    },[count])
    return (
        <div>
        <input type="text" value={name} onChange={e => setNmae(e.target.value)}></input>
            <button onClick={()=> setCount(count+1)}>Click {count}times</button>
        </div>
    )
}

export default HookCounter1
