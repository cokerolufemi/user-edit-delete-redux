
export const addNote = (newNote)=>{
    console.log(newNote);
    return{
        type : "ADD_NOTE",
        payload : newNote
    }
}

export const deleteNote = (note_id)=>{
    return{
        type:"DELETE_NOTE",
        payload: note_id
    
    }
       
}

export const editNote = (edit)=>{
    return{
        type : "EDIT_NOTE",
        payload : {edit}
    
    }
       
}
