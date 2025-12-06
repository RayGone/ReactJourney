import { Header, Body } from './Layouts';
import './App.css'



function App() {
  // const tasklist = useTaskStore(store => store.tasklist);

  // const task_template = {
  //   id: crypto.randomUUID(),
  //   name: "New Task " + (tasklist.length + 1),
  //   description: "This is a new task description",
  //   status: false
  // }


  return (
    <div className={`w-[100dvw] h-[100dvh] text-start select-none dark:bg-gray-700 dark:text-white`}>
      <Header />
      <Body />
    </div>
  )
}

export default App
