import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../app/slices/taskslice'

const TaskItem = ({task}) => {
    const dispatch = useDispatch()

  return (
     <div>
      <span>{task.text}</span>

      <button
        onClick={() =>
          dispatch(
            updateTask({
              id: task.id,
              changes: { completed: !task.completed },
            })
          )
        }
      >
        Toggle
      </button>

      <button onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </button>
    </div>
  )
}

export default TaskItem
