
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import { useState } from 'react';

function App() {
  const[todo,setTodo]=useState('');
  const[todos,setTodoes]=useState([]);
  const[editId,setEditId]=useState(0);
  
  console.log(todo)
  console.log(todos)

  const handleSubmit=(e)=>{
    console.log(e)
    e.preventDefault();
    if (editId){
      console.log("edited run")
      const editTodo= todos.find((i)=>i.id===editId);
      const updatedTodos= todos.map((t)=>
      t.id===editTodo.id
        ?(t={id:t.id, todo}):({id:t.id , todo:t.todo})
      )
      setTodoes(updatedTodos)
      setEditId(0)
      setTodo("")
      return
    }
    if (todo !== ""){
      console.log("todo running")
      console.log(todo)
      setTodoes([{ id: `${todo} ${Date.now}`, todo }, ...todos]);
      setTodo("")
    }
  }
    const handleEdit=(id)=>{
      const editTodo = todos.find((i)=> i.id === id);
      setTodo(editTodo.todo)
      setEditId(id) 
    }
    const handleDelete = (id) =>{
      const delTodo = todos.filter((to)=>to.id!==id)
      setTodoes(...delTodo)
    }
  
  return (
    <div className="App">
        <div className="container">
          <h1>To do List</h1>
            <TodoForm
              handleSubmit={handleSubmit}
              todo={todo}
              editId={editId}
              setTodo={setTodo}
            />
        </div>
        <div className="container">
          <TodoList
            todos={todos}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
     
    </div>
  );
}

export default App;
