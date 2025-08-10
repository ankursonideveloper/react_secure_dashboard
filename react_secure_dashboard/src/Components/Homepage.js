import React from 'react';

import { UserContext } from '../Contexts/UserContext';

const Homepage = () => {
  const {user, loginUser, logoutUser} = React.useContext(UserContext);

  return (

    // Main container to center content vertically and horizontally on the screen
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Welcome to the App</h1>
        <button className='transform rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-700'
                onClick={loginUser}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Homepage