import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert';
import {
  // BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('white');
      document.body.style.backgroundColor = '#1f2b3d';
      showAlert(' dark mode is enabled', "success");
      document.title='enable dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(' light mode is enabled', "success");
      document.title='enable light mode';
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" About="About Text" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='glass my-3'>
          <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<TextForm heading="Enter any Text" mode={mode} showAlert={showAlert}/>}></Route>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>   
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
