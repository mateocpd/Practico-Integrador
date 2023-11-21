import TaskItem from "../TaskItem/TaskItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TaskList.css'

const TaskList = ({ tasks, onComplete, onDelete }) => {
  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const mensajeBorrado = () => {
    toast.error('Se ha eliminado la tarea', {
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
    if (!Array.isArray(tasks)) {
      return <div>No hay tareas disponibles</div>;
    }
    return (
      <div>
      <div className="incomplete-tasks">
        <h2>Tareas incompletas:</h2>
        {incompleteTasks.map((task) => (
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
      <div className="complete-tasks">
        <h2>Tareas completadas:</h2>
        {completedTasks.map((task) => (
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
    </div>
    );
  };

export default TaskList;