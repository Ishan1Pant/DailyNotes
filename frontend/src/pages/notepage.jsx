import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

const NotePage =()=>{
    const {id} =useParams()
    const [note,setNote]=useState(null)
    useEffect(()=>{
        getNote();
    },[id])
    let getNote =async()=>{
        let response =await fetch(`http://localhost:8000/api/notes/${id}`)
        let data=await response.json();
        setNote(data)
    }
    return (
        <div>
            <h1>{note?.id}</h1>
            <h2>{note?.body}</h2>
        </div>
    )
}

export default NotePage