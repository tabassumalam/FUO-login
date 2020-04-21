import React from 'react';
import './App.css';
import Header from './components/Header';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import SignUpCustomer from './components/SigUpCustomer';
import SignUpBusiness from './components/SignUpBusiness'


function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="main">
        <LogIn />
        <SignUp />
      </div>
    </div>
  )
}

export default App;
