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

  
  // function renderTasks(selectedCategory, buttons) {
  //   buttons.forEach(button => {
  //     if (button.className === 'selected') {
  //       setTasks(tasks.filter (task => {
  //         return task.category ===selectedCategory
  //       }))
  //     }
  //   })
  // }

  function handleSubmit(event) {
    event.preventDefault()
    setTasks([...tasks, newTask])
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
      tasks={tasks}
      handleDelete={handleDelete}
      category={selectedCategory}
      />
    </div>
  );
}

export default App;
