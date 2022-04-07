import Navbar from "./Navbar";
import TextForm from "./TextForm";
import './App.css';
import Alerts from "./components/Alerts";
import  React, { useState } from 'react';





function App() {
  const [mode, setMode] = useState('light')
  const [alerts, setAlerts] = useState('null')
  const showalerts =(message , type) =>{
      setAlerts({
             msg: message ,
             type:type
})
setTimeout(() => {
  setAlerts('null');
}, 1500);
  }

  const toggleMode =()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor ='rgb(8 36 78)';
      showalerts("Dark mode has been Enable", "success");
    }
    else  {
      setMode('light')
      document.body.style.backgroundColor ='white';
      showalerts("light mode has been Enable", "success");
    }
  }
  return (

    <>
  
<Navbar title="Textutlits" mode={mode}  toggleMode={toggleMode}/>

<Alerts alerts={alerts}/>
<div className="container my-3">

 
      
        
       
   <TextForm  showalerts={showalerts} heading=" Enter your text" mode={mode} />
         

</div>


   </>
  );
}

export default App;
