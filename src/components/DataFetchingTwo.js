import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
const intialstate ={
    loading:true,
    error: '',
    post:{}

}
const reducer =(state,action)=>{
    switch(action.type){
        case 'FETCH_SuCCESS':
        return {
           loading:false,
           post: action.payload,
           error:""
        }
        case 'FETCH_ERROR':
            return{
                loading:false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {
    const[state,dispatch]=useReducer(reducer,intialstate)
    useEffect ( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type:'FETCH_SuCCESS' , payload: response.data})
        })
        .catch(error => {
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
    return (
        <div>
             {state.losding ? 'Loading' :state. post.title}
            {state.error? state.error : null}
        </div>
    )
}

export default DataFetchingTwo
