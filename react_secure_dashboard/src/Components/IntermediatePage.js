import React from 'react'

const IntermediatePage = () => {
  return (
    // Main container with a dark background to differentiate it from the homepage
    <div className='flex min-h-screen flex-col items-center justify-center bg-slate-900'>
      <div className='text-center'>
        <p className='mb-6 text-2xl text-slate-300'>You're successfully logged in!</p>
        <button className='transform rounded-lg bg-green-500 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-600'>
          Go To Dashboard
        </button>
      </div>
    </div>
  )
}

export default IntermediatePage