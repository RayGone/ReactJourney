import { useState } from 'react';
import { TaskContext } from './AppContexts';

import './App.css';
import Container from './Container';
import { Body, Header } from './Components';

const default_tasks = [
    {
        id: "001",
        name: "Task 1",
        description: "This is a task 1.",
        status: false
    },
    {
        id: "002",
        name: "Task 2",
        description: "This is task 2.",
        status: false,
    },
    {
        id: "003",
        name: "Task Complete",
        description: "This is task which is already complete.",
        status: true,
    },
    {
        id: "004",
        name: "This is a task with very long name so we can test the text elide",
        description: "This is task which is already complete.",
        status: false,
    },
    {
        id: "005",
        name: "This is another task with very long name.",
        description: "This is task which is already complete.",
        status: false,
    }
];

function App() {
  if(!localStorage.getItem("task_list"))
    localStorage.setItem("task_list", JSON.stringify(default_tasks));
  
  const data = localStorage.getItem("task_list") ? JSON.parse(localStorage.getItem("task_list")) : default_tasks;
  const [tasks, setTasks] = useState(data);

  function addTask(task){
    if(tasks.some((t) => task.id == t.id)) return;
    const all_tasks = [
      ...tasks,
      task
    ]

    localStorage.setItem("task_list", JSON.stringify(all_tasks))
    setTasks(all_tasks)
  }

  function updateTask(task){
    if(!task) return;

    const updated_tasks = tasks.map((t)=>{
      if(t.id == task.id){
        return task
      } else {
        return t
      }
    });
    setTasks(updated_tasks)
    localStorage.setItem("task_list", JSON.stringify(updated_tasks))
  }

  function removeTask(t_id){
    const updated_tasks = tasks.filter((t)=> t.id!==t_id);
    setTasks(updated_tasks)
    localStorage.setItem("task_list", JSON.stringify(updated_tasks))
  }

  function overwriteTasks(new_tasks){
    if(!!new_tasks){
      setTasks(new_tasks);
      localStorage.setItem("task_list", JSON.stringify(new_tasks))
    }
  }

  const context_value = {tasks, addTask, updateTask, removeTask, overwriteTasks};
  return (
    <TaskContext.Provider value={context_value}>
      <Container>
        <Header />
        <Body />
      </Container>
    </TaskContext.Provider>
  )
}

export default App
