import { useState } from 'react';
import Task from '../interfaces/Task.interface'
import tasksData from '../../data/tasks.json'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

const Main = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksData)

  const addNewTask = (newTask: Task) => setTasks([
    ...tasks,
    { ...newTask, id: new Date().getTime() }
  ])

  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id)
  )

  const toggleTaskCompleted = (id: number) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    }))
  }


  return (
    <main className="container p-4">
      <div className="row">
        <div className="col-md-4">
          <TaskForm
            addNewTask={addNewTask} />|
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList
              tasks={tasks}
              deleteTask={deleteTask}
              toggleTaskCompleted={toggleTaskCompleted} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main