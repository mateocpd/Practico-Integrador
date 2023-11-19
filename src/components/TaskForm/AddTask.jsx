import  { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mensaje  = () => {
  toast.success('Se ha creado la tarea', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    
}

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
      <button type="submit" onClick={mensaje}>Agregar</button>
      <ToastContainer />
    </form>
  );
};

export default AddTask;