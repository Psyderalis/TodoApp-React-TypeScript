import { useState, ChangeEvent, useRef } from 'react'
import Task from '../interfaces/Task.interface'


interface Props {
  addNewTask: (task: Task) => void
}

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const taskInitialState = {
  id: 0,
  title: '',
  description: '',
  completed: false
}

const TaskForm = ({ addNewTask }: Props) => {
  const [task, setTask] = useState<Task>(taskInitialState)
  const inputTitle = useRef<HTMLInputElement>(null)

  const handleInputChange = ({ target: { name, value } }: InputChange) => {
    setTask({ ...task, [name]: value })
  }

  const handleNewTask = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNewTask(task)
    setTask(taskInitialState)
    inputTitle.current?.focus()
  }

  return (
    <div className="card card-body bg-dark">

      <form onSubmit={handleNewTask}>
        <legend>TaskForm</legend>
        <div className="form-group">

          <input
            type="text"
            placeholder="Write a title"
            name="title"
            className="form-control mb-3"
            value={task.title}
            onChange={handleInputChange}
            autoFocus
            ref={inputTitle}
            required />

          <textarea
            name="description"
            rows={2}
            placeholder="Write a description"
            className="form-control mb-3"
            value={task.description}
            onChange={handleInputChange}
            required />

          <button className="btn btn-light">➕ Save</button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm