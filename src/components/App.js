import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  const [tasks, setTasks] = useState(TASKS)

  function handleCategoryClick(selectedCategory) {
    console.log(selectedCategory)
    //NEED TO RE-ADD TASKS THAT WERE FILTERED OUT FROM LAST CATEGORY SELECTION - NEED TO ADD CLASS NAME 'SELECTED' ONLY TO BUTTON THAT WAS CLICKED//
    const buttons = document.querySelectorAll('div.categories button')
    // const buttonsArray = Array.from(buttons)
    // console.log('buttonsArray', buttonsArray)
    buttons.forEach(button => {
      button.className = ''
    })
    buttons.forEach(button => {
      console.log(button.innerText)
      if (button.innerText === selectedCategory) {
        button.className = 'selected'
      }
    })
    renderTasks(selectedCategory, buttons)
  }

  function renderTasks(selectedCategory, buttons) {
    buttons.forEach(button => {
      if (button.className === 'selected') {
        setTasks(tasks.filter (task => {
          return task.category ===selectedCategory
        }))
      }
    })
    
    // setTasks(tasks.filter(task => {
    //   return task.category === selectedCategory
    // }))
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
      />
      <NewTaskForm />
      <TaskList 
      tasks={tasks}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
