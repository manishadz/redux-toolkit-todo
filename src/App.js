import React ,{useState} from 'react'
import { Chip, List , ListItem ,ListItemText} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Todo from './components/Todo';
import ToddoForm from './components/TodoForm';
import { DELETE_TODO } from './store/actionType';

function App() {
  const [open, setOpen]=useState(false);
  const [updateDate,setUpdateData] =useState({});
   const todos =useSelector((state=>state.todos));
   const dispatch =useDispatch()

   const handleOpen =()=>{
    setOpen(true);
   };
   const handleClose=()=>{
    setOpen(false);
    setUpdateData(null);
   }
   const handleDelete=(id)=>{
    console.log(id);
    dispatch({ type: DELETE_TODO, payload: id});
   };
 const handleUpdate=(todo)=>{
setUpdateData(todo);
handleOpen();
 }

  return (
    <div className="App">
      <h2>TODO-LIST</h2>
      <button onClick={handleOpen}>Add To Do</button>
      <ToddoForm open={open} handleClose={handleClose} todo={updateDate}/>
      <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
        {todos.map((todo, idx)=>  (
          <Todo key={todo.title} todo={todo} handleDelete={(idx) => handleDelete(idx)} handleUpdate={handleUpdate}/>
          ))}
    
    </List>
     
    </div>
  );
}

export default App;
