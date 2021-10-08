import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setCategory] = useState('All')

  let displayedTasks = [...tasks]

  if (selectedCategory !== 'All') {
    displayedTasks = tasks.filter(task => {
      return task.category === selectedCategory
    })
  } 

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDelete(deletedTask) {
    setTasks(tasks.filter(task => {
      return task.text !== deletedTask
    }))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategory={selectedCategory}
      setCategory={setCategory}
      />
      <NewTaskForm
      categories={CATEGORIES}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
      tasks={displayedTasks}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
