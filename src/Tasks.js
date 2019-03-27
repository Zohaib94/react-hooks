import React, { useState } from "react";
import uuid from "uuid/v4"

function Tasks() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  const updateTaskText = (event) => {
    setTaskText(event.target.value)
  }

  const addNewTask = () => {
    setTasks([...tasks, { id: uuid(), title: taskText }])
  }

  return(
    <div className="Task">
      <h2>Tasks</h2>
      <input onChange={updateTaskText} value={taskText} />
      <button onClick={addNewTask}>Add Task</button>
      {tasks.map(task => {
        return(
          <div key={task.id}>
            {task.title}
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;

//Note: React used to merge updated values with existing values in setState but now it replaces
//That is why we should use separate use state for separate state variables instead of keeping state
//in one object
