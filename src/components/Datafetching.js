import React ,{useState,useEffect}from 'react'
import axios from 'axios'

function Datafetching() {
    const[post,setPost]= useState({})
    const[id,setId]= useState(1)
    const[idfrombuttonclick,setIdFromButtonclick]=useState(1)
    const handleClick =() => {
        setIdFromButtonclick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    },[idfrombuttonclick])

    return (
        <div>
         <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
         <button type="button" onClick={handleClick}>Fetch post</button>
        <div>{post.title}</div> 
           {/* <ul>
              {
                  posts.map(post => <li key ={post.id}>{post.title} </li>)
              } 
           </ul>  */}
     </div>
    )
}

export default Datafetching
