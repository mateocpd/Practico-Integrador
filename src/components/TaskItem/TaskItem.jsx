import './TaskItem.css'

const TaskItem = ({ task, onComplete, onDelete, onAlert }) => {
    return (
      <div className="tarea animate__animated animate__bounce">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
          />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
        <button  onClick={() => {
          onAlert(task.title);
           onDelete(task.id);
           }}>Eliminar</button>
      </div>
    );
  };

export default TaskItem