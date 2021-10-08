import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });



function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [newTask, setNewTask] = useState({
    text: '',
    category: 'Code'
  })
  const [selectedCategory, setCategory] = useState('All')

  let displayedTasks = [...tasks]

  if (selectedCategory !== 'All') {
    displayedTasks = tasks.filter(task => {
      return task.category === selectedCategory
    })
  } 

  function handleCategoryClick(category) {
    setCategory(category)
    const buttons = document.querySelectorAll('div.categories button')
    //clear 'selected' class from all buttons
    buttons.forEach(button => {
      button.className = ''
    })
    //add 'selected' class to selected button
    buttons.forEach(button => {
      
      if (button.innerText === category) {
        button.className = 'selected'
      }
      //console.log(button.innerText, button.className)
    })

    
  }

  function handleSubmit(event) {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask({
      text: '',
      category: 'Code'
    })
  }

  function handleDelete(deletedTask) {
    //console.log(deletedTask)
    setTasks(tasks.filter(task => {
      return task.text !== deletedTask
    }))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      handleCategoryClick={handleCategoryClick}
      selectedCategory={selectedCategory}
      setCategory={setCategory}
      />
      <NewTaskForm
      categories={CATEGORIES}
      newTask={newTask}
      setNewTask={setNewTask}
      onTaskFormSubmit={handleSubmit}
      />
      <TaskList 
      tasks={displayedTasks}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
