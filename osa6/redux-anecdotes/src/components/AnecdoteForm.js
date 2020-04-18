import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = event => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(addAnecdote(content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name="content"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm