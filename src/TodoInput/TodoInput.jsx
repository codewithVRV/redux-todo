import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aos from  'aos';
import 'aos/dist/aos.css';

import { addTodo } from "../actions/index";
import todoSlice from "../slices/todoSlice";

function TodoInput () {
    useEffect(() => {
        Aos.init({duration: 3000})
    }, {})

    const [inputText, setInputText] = useState("")
    
    const todoList = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const {addTodo} = todoSlice.actions;

    function insertTodo () {
        const lastId = (todoList.length == 0) ? 0 : todoList[todoList.length - 1].id;
        dispatch(addTodo({ title: inputText, id: lastId+1 }));
        setInputText("")
    }
        return (
            <>
                <input 
                    data-aos="slide-up"
                    type="text"
                    placeholder="Add Todo Here.."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}

                />
                <button onClick={insertTodo}>Add-Todo</button>
            
            </>
        )
}

export default TodoInput;