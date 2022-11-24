import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./store/actionType";

const initialState ={
    todos: [
        {id:1, title:"lets play",due_date:"20/20/2222",status:"pending"},
    {
        id:2, 
        title:"lets drink",
        due_date:"20/20/2222",
        status:"complete"
    },],
}
export const reducer =(state= initialState,action) =>{
    const {type, payload}= action;
    console.log(type);

    switch(type){
        case ADD_TODO:
            return{todos: [...state.todos,payload]};
        case DELETE_TODO:
            return {
                todos: state.todos.filter( todo=> todo.id !== payload)
            };

        case UPDATE_TODO:
            return {todos:state.todos.map(todo=>{
                if(todo.id===payload.id){
                    return payload;
                }
                return todo;
            }),
        }

        default:
            return state;
    }
}