import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTasks } from '../../app/slices/taskslice'

const TaskList = () => {
    const tasks = useSelector(selectAllTasks)
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
