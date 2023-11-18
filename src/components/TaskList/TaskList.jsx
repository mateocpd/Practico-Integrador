import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, onComplete, onDelete }) => {
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
          />
        ))}
      </div>
    );
  };

export default TaskList;