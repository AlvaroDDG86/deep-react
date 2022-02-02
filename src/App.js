import React, { useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/DemoOutput';

import './App.css';

function App() {
  console.log('APP')
  const [showText, setShowText] = useState(false)

  const clickButtonHandler = () => {
    setShowText(prev => !prev)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showText}></DemoOutput>
      <Button onClick={clickButtonHandler}>Click me</Button>
    </div>
  );
}

export default App;
