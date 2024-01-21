import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const NotesPage=()=>{
    const [notes,setNotes]=useState([]);
    useEffect(()=>{
        getNotes();
    },[])

    let getNotes = async()=>{
        let response = await fetch('http://localhost:8000/api/notes')
        let data=await response.json()
        setNotes(data)
    }


    return (
        <div>
            <div className='all-notes'>
                {notes.map((note)=>{
                    return <Link to={`/note/${note.id}`}><h3 key={note.id}>{note.body}</h3></Link> 
                })}
            </div>
        </div>
    )
}
export default NotesPage
