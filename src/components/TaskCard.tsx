import Task from "../interfaces/Task.interface"

interface Props {
  task: Task,
  deleteTask: (id: number) => void,
  toggleTaskCompleted: (id: number) => void
}

const TaskCard = ({ task, deleteTask, toggleTaskCompleted }: Props) => {
  return (
    <div className="card text-white bg-primary" style={{ maxWidth: '20rem', margin: '10px' }}>
      <div className="card-header">✅ {task.title}</div>
      <div className="card-body">
        <p className="card-text">{task.description}</p>
        <p className="card-text">{task.completed ? 'Completed' : 'Uncompleted'}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            className="btn btn-warning"
            onClick={() => deleteTask(task.id)}>
            Delete
          </button>
          <button
            className={`btn ${task.completed ? 'btn-danger' : 'btn-success'}`}
            onClick={() => toggleTaskCompleted(task.id)}>
            {task.completed ? 'Undo' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
