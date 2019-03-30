import React, { useState, useEffect, useReducer } from "react";
import uuid from "uuid/v4";

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";

const TYPES = {
  ADD_TASK: 'ADD_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  REMOVE_TASK: 'REMOVE_TASK'
}

const INITIAL_STATE = {
  tasks: [],
  completedTasks: []
}

const tasksReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;

    case TYPES.ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    }

    case TYPES.COMPLETE_TASK: {
      const remainingTasks = state.tasks;

      return {
        ...state,
        tasks: remainingTasks.filter(remainingTask => remainingTask.id !== action.task.id),
        completedTasks: [...state.completedTasks, action.task]
      }
    }

    case TYPES.REMOVE_TASK: {
      const remainingTasks = state.completedTasks;
      return {
        ...state,
        completedTasks: remainingTasks.filter(remainingTask => remainingTask.id !== action.task.id)
      }
    }
  }
}

const storeTasks = taskMap => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(taskMap));
};

const readTasks = () => {
  const taskMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return taskMap ? taskMap : INITIAL_STATE;
};

function Tasks() {
  const storedTasks = readTasks();
  const [taskText, setTaskText] = useState("");

  const [state, dispatch] = useReducer(tasksReducer, storedTasks);
  const {tasks, completedTasks} = state;

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  }, [tasks, completedTasks]);

  const updateTaskText = event => {
    setTaskText(event.target.value);
  };

  const addNewTask = () => {
    const newTaskAction = {
      type: TYPES.ADD_TASK,
      task: { id: uuid(), title: taskText }
    }

    dispatch(newTaskAction)
  };

  //Use this notation when you have to pass a reference to function with arguments
  const completeTask = completedTask => () => {
    const completeTaskAction = {
      type: TYPES.COMPLETE_TASK,
      task: completedTask
    }

    dispatch(completeTaskAction)
  };

  const deleteTask = task => () => {
    const removeTaskAction = {
      type: TYPES.REMOVE_TASK,
      task
    }

    dispatch(removeTaskAction)
  };

  return (
    <div className="Task">
      <h2>Tasks</h2>
      <div className="form">
        <input onChange={updateTaskText} value={taskText} />
        <button onClick={addNewTask}>Add Task</button>
      </div>

      <div>
        {tasks.map(task => {
          return (
            <div key={task.id} onClick={completeTask(task)}>
              {task.title}
            </div>
          );
        })}
      </div>

      <div className="completed-list">
        {completedTasks.map(completedTask => {
          return (
            <div key={completedTask.id}>
              {completedTask.title}
              <span className="delete-task" onClick={deleteTask(completedTask)}>
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;

//Note: React used to merge updated values with existing values in setState but now it replaces
//That is why we should use separate use state for separate state variables instead of keeping state
//in one object
