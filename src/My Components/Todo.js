import React from 'react'
import { TodoItems } from "../My Components/TodoItems.js";
//or import { TodoItems } from "./TodoItems.js"; as just one folder up
export const Todo = (props) => {
    let myStyle = {
        minHeight:"65vh",
        margin:"auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className=' my-3'>Todo list</h3>
            {
            props.todo.length===0?
                "You're done for now!":
                props.todo.map((todo)=>{
                    return(
                    <TodoItems 
                    todo={todo}
                    key={todo.sn}
                    onDelete={props.onDelete} />
                    )
                    })
            }
        </div>
    )
}
