import  { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddTask.css';


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
      toast.success('Se ha creado la tarea!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}  className="form">
      <p className="texto">Agregar nueva tarea</p>
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