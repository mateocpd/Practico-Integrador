import TaskItem from "../TaskItem/TaskItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskList = ({ tasks, onComplete, onDelete }) => {

  const mensajeBorrado = () => {
    toast.error('Se ha eliminado la tarea', {
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
    if (!Array.isArray(tasks)) {
      return <div>No hay tareas disponibles</div>;
    }
    return (
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            onAlert={mensajeBorrado}
          />
        ))}
        <ToastContainer />
      </div>
    );
  };

export default TaskList;