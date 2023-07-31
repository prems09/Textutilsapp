import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); //wheether dark mode is enable or not\
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg:message,  
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#051e36';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
  <>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
  
    <Alert alert={alert}/>

    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Try it- Converted to uppercase & lowercase, word and character counter and Remove extra spaces" mode={mode}/>
    {/* <About/> */}
          
    
    </div>
    
  </>
  );
}


export default App;
