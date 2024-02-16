import React from 'react'
import { Link } from 'react-router-dom'
import { Label, TextInput, Button } from 'flowbite-react'

const SignUp = () => {
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
          <form className='flex flex-col gap-4'>
            <div>
              <Label value="Your username" />
              <TextInput 
                type='text'
                placeholder='username'
                id='username'
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput 
                type='text'
                placeholder='name@example.com'
                id='email'
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput 
                type='text'
                placeholder='password'
                id='password'
              />
            </div>
            <Button 
              gradientDuoTone= 'purpleToPink'
              type='submit'
              >
                Sign Up
            </Button>
            
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account ?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  
}

export default SignUp