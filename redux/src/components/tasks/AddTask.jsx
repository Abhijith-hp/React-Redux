
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addOne } from '../../app/slices/taskslice';

const AddTask = () => {

    const [text,setText] = useState("")
    const dispatch = useDispatch();

    const handleAdd = ()=>{
        dispatch(addOne({
            id:Date.now(),
            text:text,
            completed:false
        }))
    setText("")
    }
  return (
    <div>
       <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
    </div>
  )
}

export default AddTask
