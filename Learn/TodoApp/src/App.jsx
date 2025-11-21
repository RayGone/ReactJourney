// import { useState } from 'react';

import { ChartBarIcon } from "@heroicons/react/24/solid";

import './App.css';
import Container from './Container';
import { Body, Header } from './Components';

function App() {
  // const [count, setCount] = useState(0)

  const list = [];
  for(let i=0; i < 1000; i++){
    list.push(<span key={i}>this is simple layout.</span>)
  }


  return (
    <Container>
      <>
        <Header />
        <Body />
      </>
    </Container>
  )
}

export default App
