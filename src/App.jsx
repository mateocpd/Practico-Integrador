import "./App.css";
import AddTask from "./components/TaskForm/AddTask.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import { useState, useEffect } from "react";


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };


  return (
    <>
      <h1>Lista de tareas</h1>
      <TaskList
        tasks={tasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
      <AddTask onAdd={handleAddTask}/>
      <footer><strong>© Derechos reservados Mateo Capdevila Ontivero y Matias Sanchez.</strong></footer>
      
    </>
  );
}

export default App;
