import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react'

const SignUp = () => {

  const [formData, setFormData] = useState({});

  const[errorMessage, setErrorMessage] = useState(null);
  const[loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({...formData, [e.target.id] : e.target.value.trim()})
  };
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please fill out all the fields.')
    }

    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json(); //this sends the data to the backend
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch(error){
      // console.log(error); 
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  return <div className='min-h-screen mt-20 md:items-center'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5'>
        <div className='flex-1'>
          {/* left side */}
          <Link 
            to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white'>ETT</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
              This is the demo project. You can signup with your email and password or with Google
          </p>
        </div>

        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput 
                type='text'
                placeholder='username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput 
                type='email'
                placeholder='name@example.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput 
                type='password'
                placeholder='password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button 
              gradientDuoTone= 'purpleToPink' type='submit' disabled={loading}>
                {/* Sign Up */}
                {
                  loading ? (
                    <>
                      <Spinner size='sm' />
                      <span className='pl-3'>Loading...</span>
                    </>
                  ) : 'Sign Up'
                }
            </Button>
            
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account ?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  
}

export default SignUp