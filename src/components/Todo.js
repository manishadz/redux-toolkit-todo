import React from 'react'
import { Chip, List , ListItem ,ListItemText} from '@mui/material';


const Todo = ({todo ,handleDelete, handleUpdate}) => {
  //  const {todo}= props;
   const chipStyle ={
    width: 100,
    cursor:"pointer"
   };

   
  return (
    <ListItem style={{background:"#1976d233" , marginBottom:5}}>
    <ListItemText primary={todo.title}
     secondary={
     <>
     {todo.due_date}
     <Chip
      label={todo.status} size="small" variant="outlined" 
     style={{margin:10 ,width:80}}
     color={todo.status==='Pending'?"error":"success"} />
     </>
    } 
    
    />
     <Chip title= "Edit_Todo" 
     label="Update"
      color="primary"
       style={chipStyle}
       onClick={()=>handleUpdate(todo)}
       />
     <Chip 
     title="Delete_Todo" 
     label="DELETE" color="warning"
      style={chipStyle}
      onClick={() => handleDelete(todo.id)}
      />
  </ListItem>
  )
}

export default Todo