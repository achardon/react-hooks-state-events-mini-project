import React, {useState} from "react";
// import { TASKS } from "../data";

function NewTaskForm({categories, onTaskFormSubmit}) {
  
  const [newTask, setNewTask] = useState({
    text: '',
    category: 'Code'
  })

  let text = newTask.text
  let category = newTask.category

  function manageData(event) {
    let name = event.target.name
    let value = event.target.value
    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  function handleOnTaskFormSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(newTask)
    setNewTask({
      text: '',
      category: 'Code'
    })
  }

  return (
    <form 
    className="new-task-form"
    onSubmit={handleOnTaskFormSubmit}
    >
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        onChange={manageData}
        value={text}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        onChange={manageData}
        value={category}
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
