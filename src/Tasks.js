import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";

const storeTasks = taskMap => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(taskMap));
};

const readTasks = () => {
  const taskMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return taskMap ? taskMap : { tasks: [], completedTasks: [] };
};

function Tasks() {
  const storedTasks = readTasks();
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState(storedTasks.tasks);
  const [completedTasks, setCompletedTasks] = useState(
    storedTasks.completedTasks
  );

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  }, [tasks, completedTasks]);

  const updateTaskText = event => {
    setTaskText(event.target.value);
  };

  const addNewTask = () => {
    setTasks([...tasks, { id: uuid(), title: taskText }]);
  };

  //Use this notation when you have to pass a reference to function with arguments
  const completeTask = completedTask => () => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter(task => task.id !== completedTask.id));
  };

  const deleteTask = task => () => {
    setCompletedTasks(
      completedTasks.filter(completedTask => task.id !== completedTask.id)
    );
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
