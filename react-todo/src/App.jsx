import React, { useState } from 'react'
import Todo from './components/Todo'
import "./App.css"
import Index from './components/todo2/Layout/Index'


const App = () => {

  const [modal, setModal]=useState(false)
  return (
    <div className='main'>
      {/* <Todo /> */}
      <Index modal={modal} setModal={setModal}/>
    </div>
  )
}

export default App