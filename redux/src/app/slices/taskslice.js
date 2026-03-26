import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const taskAdapter = createEntityAdapter()

const intialState = taskAdapter.getInitialState({
    status:"idle"
})

const taskSlice = createSlice({
    name:"tasks",
    initialState:intialState,
    reducers:{
        addOne:taskAdapter.addOne,
        addTasks:taskAdapter.addMany,
        updateTask:taskAdapter.updateOne,
        updateTasks:taskAdapter.updateMany,
        deleteTask:taskAdapter.removeOne,
        deleteTasks:taskAdapter.removeMany,

    }
});

export const {addOne, addTasks, updateTask, updateTasks, deleteTask, deleteTasks} = taskSlice.actions;
export default taskSlice.reducer;
export const {
    selectAll:selectAllTasks,
    selectById:selectTaskById,
    selectIds:selectTaskIds
}=taskAdapter.getSelectors((state)=>state.task)