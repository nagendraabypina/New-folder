import {useState} from 'react';
import './App.css';

function App() {
 
 const [todo, setTodo] = useState([]);
 const [list, setList] = useState([]);
  function addTodo(e){
    setTodo(e.target.value);
  }

  function addList(){
    setList([...todo, list]);
  }
  return (
    <div className="App">
      <h1>To do list</h1>
      <input type="text" placeholder="Enter a Task..." onChange={addTodo} value={todo}></input>
      <button onClick={(e)=>addList(e)}>Add</button>
      <ul>
        <li>{todo}</li>
        <li>{list}</li>
      </ul>
     
    </div>
  );
}

export default App;
