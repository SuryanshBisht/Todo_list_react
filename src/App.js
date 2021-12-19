import './App.css';
import {Header} from "./My Components/Header.js";
import {Footer} from "./My Components/Footer.js";
import { Todo } from './My Components/Todo.js';
import {AddTodo} from "./My Components/AddTodo.js";
import { About } from "./My Components/About.js";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
    }
  else{
    initTodo =  JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo",todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    //can't delete this way, use usestate hook instead
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

const addTodo = (title, desc) => {
  console.log("I am adding this todo",title,desc)
  
  let sno= todos.length?todos[todos.length-1].sn+1:0;
  const MyTodo = {
    sn:sno,
    title:title,
    desc:desc,
  }
  setTodos([...todos,MyTodo]);
  console.log(MyTodo);

  

}
/*updater of useState hook(here the setTodos method) doesn't changes instantaneously,
there is generally some delay in updating the local storage
so we need useeffect hook*/
  const [todos, setTodos]=useState(initTodo);
  useEffect( 
    ()=> {
      localStorage.setItem("todos",JSON.stringify(todos));
    },
    [todos]
  )


  return (
    <>
    <Router>
      <Header title={"Todos list"} searchBar={true}/>

      <Routes>
        <Route exact path="/" element={<><AddTodo AddTodo={addTodo}/>
            <Todo todo={todos} onDelete={onDelete}/></>}
        >
        </Route>
        <Route exact path="/about" element={<About/>}>
          {/* need exact as otherwise "/" will be considered same as "/about" */}
          
        </Route>    
      </Routes>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
