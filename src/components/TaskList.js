import React from "react";
import Task from './Task';


function TaskList({tasks, handleDelete, category}) {

  let displayedTasks = [...tasks]

  if (category !== 'All') {
    displayedTasks = tasks.filter(task => {
      return task.category === category
    })
  } 

  //console.log(displayedTasks)
 
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayedTasks.map(task => {
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
