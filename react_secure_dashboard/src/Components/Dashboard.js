import React from 'react';

import { UserContext } from '../Contexts/UserContext';

const Dashboard = () => {
  const {user, loginUser, logoutUser} = React.useContext(UserContext);

  return (
    // Main container with a light slate background for the entire dashboard area
    <div className='min-h-screen bg-slate-100'>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Dashboard</h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
          {/* Main content card */}
          <div className='rounded-lg bg-white p-8 shadow-md'>
            <p className='text-xl font-medium text-gray-700'>
              Welcome! This is the dashboard.
            </p>
            <button className='transform rounded-lg bg-red-600 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-700'
                    onClick={logoutUser}>Logout</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard