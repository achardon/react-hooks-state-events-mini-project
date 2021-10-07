import React from "react";
import Task from './Task';


function TaskList({tasks, handleDelete}) {

 
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map(task => {
        return <Task 
        key={task.text} 
        task={task}
        handleDelete={handleDelete}
        />
      })}
    </div>
  );

  }


export default TaskList;
