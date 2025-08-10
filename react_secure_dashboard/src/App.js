import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

import Homepage from './Components/Homepage';
import Dashboard from './Components/Dashboard';
import { UserContext } from './Contexts/UserContext';
import ProtectedRoute from './Routes/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const loginUser = () =>{
    setUser(true);
    navigate('/dashboard');
  }

  const logoutUser = () =>{
    setUser(false);
    navigate('/');
  }

  return (
    <UserContext.Provider value={{user, loginUser, logoutUser}}>    
        <Routes>
          <Route path="/" Component={Homepage}></Route>
         <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
        </Routes>
    </UserContext.Provider>
  );
}

export default App;
