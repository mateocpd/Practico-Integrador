const TaskItem = ({ task, onComplete, onDelete, onAlert }) => {
    return (
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
        <button onClick={() => {
          onAlert(task.title);
           onDelete(task.id);
           }}>Eliminar</button>
      </div>
    );
  };

export default TaskItem