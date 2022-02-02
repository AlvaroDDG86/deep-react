import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/DemoOutput';

import './App.css';

function App() {
  console.log('APP')
  const [showText, setShowText] = useState(false)

  // save the value of the funcion, then it will be the same function
  const clickButtonHandler = useCallback(() => {
    setShowText(prev => !prev)
  }, [setShowText])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showText}></DemoOutput>
      <Button onClick={clickButtonHandler}>Click me</Button>
    </div>
  );
}

export default App;
