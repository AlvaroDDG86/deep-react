import React, { useCallback, useMemo, useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/DemoOutput';

import './App.css';
import DemoList from './components/DemoList';

function App() {
  console.log('APP')
  const [showText, setShowText] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  const [title, setTitle] = useState('')

  // save the value of the funcion, then it will be the same function, until some dependencie change
  const clickButtonHandler = useCallback(() => {
    if (allowToggle) {
      setShowText(prev => !prev)
    }
  }, [allowToggle]) // when this variable change, the function will recreate

  const allowToggleHandler = () => {
    setAllowToggle(prev => !prev)
  }

  const setTitleHandler = () => {
    setTitle(Math.random().toString())
  }


  // make this array the same instead of redender
  const listItems = useMemo(() => [2, 4, 1, 3, 7], [])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={title} list={listItems}></DemoList>
      <DemoOutput show={showText}></DemoOutput>
      <Button onClick={setTitleHandler}>Random title</Button>
      <Button onClick={allowToggleHandler}>Allow click</Button>
      <Button onClick={clickButtonHandler}>Click me</Button>
    </div>
  );
}

export default App;
