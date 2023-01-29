import React from 'react'

function Task({item}) {
  return (
    <div className='task--list'>
      <p>{item.text}</p>
      <div>
      <h4>{item.priority? 'high' : 'medium'}</h4>
      </div>
      <h4>{item.id}</h4>
    </div>
  )
}

export default Task