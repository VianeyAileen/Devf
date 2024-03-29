import { useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { CREATE_NOTE, UPDATE_NOTE } from '../graphql/Mutation'
import { useLocation, useNavigate } from 'react-router-dom'

const Form = () => {
  /* Global varibales declatation block */
  const navigate = useNavigate()
  const location = useLocation()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [author, setAuthor] = useState('')
  const [_id, setId] = useState(' ')

  /* Location store variables */
  const getStateObj = location.state
  const noteId = location.state && location.state._id !== undefined ? location.state._id : ''
  const titleNote = location.state && location.state.title !== undefined ? location.state.title : ''
  const contentNote = location.state && location.state.content !== undefined ? location.state.content : ''
  const dateNote = location.state && location.state.date !== undefined ? location.state.date : ''
  const authorNote = location.state && location.state.author !== undefined ? location.state.author : ''

  useEffect(() => {
    if (getStateObj) {
      setTitle(titleNote)
      setContent(contentNote)
      setDate(dateNote)
      setAuthor(authorNote)
      setId(noteId)
    }
  }, [])

  /* Mutation declaration block */
  const [createNote] = useMutation(CREATE_NOTE, {})
  const [updateNote] = useMutation(UPDATE_NOTE, {})

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        if (getStateObj) {
          await updateNote({
            variables: { title, content, date, author, _id }
          })
        } else {
          await createNote({
            variables: { title, content, date, author }
          })
        }
        navigate('/')
      }}
    >
      <div className='mb-6'>
        <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Note Title</label>
        <input
          type='text'
          id='title'
          value={title}
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='content' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Note Content</label>
        <textarea
          type='textarea'
          id='content'
          value={content}
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='date' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Note Date</label>
        <input
          type='date'
          id='date'
          value={date}
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          onChange={(e) => {
            setDate(e.target.value)
          }}
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='author' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Note Author</label>
        <input
          type='text'
          id='author'
          value={author}
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
        />
      </div>
      <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        {getStateObj ? 'Actualizar Nota' : 'Crear Nota'}
      </button>
    </form>

  )
}

export default Form
