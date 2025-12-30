import { Header, Body } from './Layouts';
import './App.css'

function App() {

  return (
    <div className={`w-full h-full text-start select-none dark:bg-gray-700 bg-gray-200 dark:text-white absolute top-0`}>
      <Header />
      <Body />
    </div>
  )
}

export default App
