import useForm from '@/hooks/useForm'
import { LoginUser } from '@/services/UserServices'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/Auth'

function Login () {
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // Función que envia los datos
  const sendData = async (data) => {
    try {
      const result = await LoginUser(data)

      if (result.status === 200) {
        console.log(result)
        loginUser(result.data.token)
        navigate('/dashboard')
      }
    } catch (error) {
      alert('Ocurrió un error ' + error.message)
      console.log(error)
    }
  }

  // Estado inicial con el hook useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <form className='container'>
      <div className='mt-5 mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          name='email'
          onChange={handleInputChange}
          value={input.email}
          id='exampleFormControlInput1'
          placeholder='name@example.com'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputPassword'>
          Password
        </label>
        <div>
          <input
            type='password'
            className='form-control'
            name='password'
            onChange={handleInputChange}
            value={input.password}
            id='inputPassword'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-8 offset-2'>
          <button
            type='button'
            className='btn btn-primary w-100'
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default Login
