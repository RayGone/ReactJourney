import { useState } from 'react';

import { ChartBarIcon } from "@heroicons/react/24/solid";

import './App.css';
import TodoList from './Components/TodoList';
import Layout from './Layout';

function App() {
  // const [count, setCount] = useState(0)

  const list = [];
  for(let i=0; i < 1000; i++){
    list.push(<span key={i}>this is simple layout.</span>)
  }
  return (
    <Layout>
      <TodoList />
    </Layout>
  )
}

export default App
