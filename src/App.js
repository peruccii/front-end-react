import React from 'react'
import FormLogin from "./components/FormLogin";
import FormRegister from './components/FormRegister';
import './components/FormLogin.css'
import './components/Style.css'
import PanelsContainer from './components/PanelsContainer';


function App() {
  
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <FormLogin />
          <FormRegister />
        </div>
      </div>
      <PanelsContainer />
    </div>
  )
}

export default App;
