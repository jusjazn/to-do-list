import React, { useState } from 'react';

function App() {

  // list of tasks
  const [tasks, setTasks] = useState([]);
  
  // list of each field in a to do item
  const [taskName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  // adding items
  const addItem = () => {
    if(taskName === "" || description === "" || dueDate ===""){
      alert("Please fill out all of the fields!")
    } else {

      setTasks([
        ...tasks,
        { name: taskName, 
          detail: description, 
          date: dueDate}
      ]);

      setName("");
      setDescription("");
      setDueDate("");
   }
  };

  const ToDoItem = ({ task }) => {

    const [status, setStatus] = useState(false);

    const checkOff = () => {
      setStatus(!status);
    };

    const deleteTask = () => {
      const newArray = [];
      tasks.forEach((i) => {
        if (i !== task) newArray.push(i);
        // or you can use filter!
      
      setTasks(newArray);
      });

    };

    return (
      <div
      style ={{
        border: "3px solid black",
        width: "300px",
        marginBottom: "50px",
        padding: "10px",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}>

      {status ? (
        <h2>
          <strike>{task.name}</strike>
        </h2>

      ) : (
        <div>
          <h2>{task.name}</h2>
          <p>{task.detail}</p>
          <p>Due: {task.date}</p>
        </div>
      )}
      
      <button onClick={checkOff}> Check Off! </button>
      <button onClick={deleteTask}>Delete!</button>

      </div>
    );
  };
    
  return(
  
    <div
    style={{
      alignItems: "center", 
      backgroundColor:'ivory', 
      textAlign: "center",
      display: "flex",
      flexDirection: "column"
    }}
    >
    <title>To Do List</title>
    <h1>Please Do These Things</h1>
      
    <label for="taskName">Name of Task:</label>
    <input 
      type="text" 
      value = {taskName}
      onChange={(e) => setName(e.target.value)}
      />
    <br></br>

    <label for="taskDescription">Description:</label>
    <input 
      type="text"
      value = {description}
      onChange={(e) => setDescription(e.target.value)}
      />
    <br></br>

    <label for="taskDueDate">Due Date:</label>
    <input 
      type="text"
      value = {dueDate}
      onChange={(e) => setDueDate(e.target.value)}
      />
    <br></br>

    <button onClick={addItem}> Add it!</button>
    <br></br>

    {tasks.map((todo) => <ToDoItem task={todo} />)}
    </div>
  );
};


export default App;