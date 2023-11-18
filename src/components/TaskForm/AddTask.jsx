import  { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //pregunto por tarea vacia
    if (taskName.trim() !== "") {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: taskName,
        completed: false,
      };
      onAdd(newTask);
      setTaskName(""); //limpiar campo de entrada despues de agregar la tarea
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        placeholder="Añadir nueva tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTask;