import React,{useEffect,useState} from 'react'

function HookMouse() {
    const[x,stateX]=useState(0)
    const[y,stateY]=useState(0)
    const logMousePosition = e => {
        console.log("Mouse event ")
        stateX(e.clientX)
        stateY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEfffect called')
        window.addEventListener('mousemove', logMousePosition)
        return ()=> {
            console.log ('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
