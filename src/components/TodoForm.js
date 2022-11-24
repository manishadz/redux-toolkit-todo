import  {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ADD_TODO, UPDATE_TODO } from '../store/actionType';



const STATUS=["Pending","Complete"];
const initialState = { title:"",due:"",status:""};
const ToddoForm=({open,handleClose ,todo}) => {
    const dispatch = useDispatch();
    const [formData,setFormData]= useState(initialState);
    const {title ,due_date ,status} =formData;
    useEffect(()=>{
        if (todo){
            setFormData(todo);
        }
    },[todo]);

   
    
    const handleInputChange =( e ,key)=>{
        const {value}= e.target
        setFormData({...formData,[key]:value});   
    };
    const resetFormData=()=>{

    }
    const handleSubmit =()=>{
      
        dispatch({type:ADD_TODO ,
             payload : {id:Math.random(),
                ...formData}});
               resetFormData();
               handleClose();
    };
    const handleUpdate =()=>{
        dispatch({type:UPDATE_TODO, payload: formData});
        resetFormData();
        handleClose();
    }
    
  
  return (
    <div>
      <Dialog open={open} >
        <DialogTitle>{todo ?" Update Todo":" Add New Todo"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To create a new todo, please fill the form.
            </DialogContentText>
            <form onSubmit={handleSubmit}>
            <TextField
            autoFocus
            margin="dense"
            id="title "
            label="Title"
            value={title}
            fullWidth
            variant="standard"
            required
            onChange={(e)=> handleInputChange(e ,"title")}
          />

<TextField
            autoFocus
            margin="dense"
            id="due_date"
            type="date"
            label="Due Date"
            value={due_date}
            fullWidth
            variant="standard"
            required
            onChange={(e)=> handleInputChange(e , "due_date")}
            InputLabelProps={{ shrink : true}}
          />
          <FormControl variant="standard" fullWidth required>
        <InputLabel id="status">Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          value={status}
          onChange={(e)=> handleInputChange(e ,"status")}
          label="Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {STATUS.map(st=><MenuItem value={st}>{st}</MenuItem>)}
        </Select>
      </FormControl>
            </form> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {todo?(<Button onClick={handleUpdate}>Update</Button>):
          (<Button onClick={handleSubmit}>Create</Button>)}
          
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ToddoForm;