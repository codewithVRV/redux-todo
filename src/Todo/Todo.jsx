import { bindActionCreators } from "redux";
import { removeTodo, editTodo } from "../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import todoSlice from "../slices/todoSlice";

function Todo ({title, id}){
    const dispatch = useDispatch();
    const {editTodo, removeTodo} = todoSlice.actions;

    const actions = bindActionCreators({removeTodo, editTodo}, dispatch)


    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(title)
    function updatedTodo () {
        if(isEditing){
            actions.editTodo({id: id, title: editText})
            setIsEditing(false)
        }
        else{
            setIsEditing(true)
        }
    }
    return (

        <div>
            {(isEditing) ? <input 
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
            
            /> : editText}
            <button onClick={() => actions.removeTodo(id)}>Delete</button>
            <button onClick={updatedTodo}>{(!isEditing) ? "Edit" : "Save"}</button>
        </div>
    )
}

export default Todo;