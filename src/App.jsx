import "./App.css";
import AddTask from "./components/TaskForm/AddTask.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      { id: 1, nombre: "Hacer la compra", completed: false },
      { id: 2, nombre: "Estudiar para el examen", completed: false },
      { id: 3, nombre: "Salir a correr", completed: false },
      { id: 4, nombre: "tarea azar", completed: false },
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
      <TaskList
        tasks={tasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
      <AddTask onAdd={handleAddTask}/>
    </>
  );
}

export default App;
