import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/DemoOutput';

import './App.css';

function App() {
  console.log('APP')
  const [showText, setShowText] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  // save the value of the funcion, then it will be the same function, until some dependencie change
  const clickButtonHandler = useCallback(() => {
    if (allowToggle) {
      setShowText(prev => !prev)
    }
  }, [allowToggle]) // when this variable change, the function will recreate

  const allowToggleHandler = () => {
    setAllowToggle(prev => !prev)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showText}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow click</Button>
      <Button onClick={clickButtonHandler}>Click me</Button>
    </div>
  );
}

export default App;
