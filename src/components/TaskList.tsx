import Task from "../interfaces/Task.interface"
import TaskCard from "./TaskCard"

interface Props {
  tasks: Task[],
  deleteTask: (id: number) => void,
  toggleTaskCompleted: (id: number) => void
}

const TaskList = ({ tasks, deleteTask, toggleTaskCompleted }: Props) => {
  return (
    <>
      {
        tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompleted={toggleTaskCompleted} />
        ))
      }
    </>
  )
}

export default TaskList