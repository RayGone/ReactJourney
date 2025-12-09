import { Header, Body } from './Layouts';
import './App.css'

function App() {

  return (
    <div className={`w-[100dvw] h-[100dvh] text-start select-none dark:bg-gray-700 bg-gray-200 dark:text-white`}>
      <Header />
      <Body />
    </div>
  )
}

export default App
