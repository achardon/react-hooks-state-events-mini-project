import React from "react";
// import { TASKS } from "../data";

function NewTaskForm({categories, newTask, setNewTask, onTaskFormSubmit}) {
  
  function manageData(event) {
    let name = event.target.name
    let value = event.target.value
    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  return (
    <form 
    className="new-task-form"
    onSubmit={onTaskFormSubmit}
    >
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        onChange={manageData}
        value={newTask.text}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        onChange={manageData}
        value={newTask.category}
        >
          {/* render <option> elements for each category here */}
          {categories.map(category => {
            if (category !== 'All') {
              return <option key={category}>{category}</option>
            }
            return true
          })}
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
