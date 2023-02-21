import {useState, useEffect} from 'react'
import {FaUser, FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const { name, email, password, password2} = formData

  const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please sign in</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Choose a password' onChange={onChange}/>
          </div>
          <button type='submit' className='btn btn-block'>Submit</button>
        </form>
      </section>
    </>
  )
}

export default Login