import './App.css';
import Start from './Components/Start';
import { BrowserRouter, Route  } from 'react-router-dom'; 
import { Routes } from 'react-router-dom'; 
import Nav from './Components/Nav'; 
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Draw from './Components/Draw';
import Calendar from './Components/Calendar';
import Bar from './Components/Bar';
import Home from './Components/Home';
import Profile from './Components/Profile';
import ForgetPassword from './Components/ForgetPassword';
import EnterPass from './Components/EnterPass';
import AddCustomer from './Components/AddCustomer';
import Faq from './Components/Faq';
import ManageCustomer from './Components/ManageCustomer';
import Schedule from './Components/Schedule';
import AddTask4 from './Components/AddTask4';
import AddProject4 from './Components/AddProject4';

//import { CssBaseline, ThemeProvider } from "@mui/material";
//import { ColorModeContext, useMode } from "./Components/Theme";

function App() {
  //const [theme, colorMode] = useMode();
  return (
    //<ColorModeContext.Provider value={colorMode}>
    //<ThemeProvider theme={theme}>
        //<CssBaseline />
    <div className="App">
    <BrowserRouter> 
      <Routes> 
        <Route exact path="/" element={<Start/>}/> 
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        <Route exact path="/ForgetPassword" element={<ForgetPassword/>}/>
        <Route exact path="/EnterPass" element={<EnterPass/>}/>
        <Route exact path="/Nav" element={<Nav/>}/> 
        <Route exact path="/Draw" element={<Draw/>}/>
        <Route exact path="/Calendar" element={<Calendar/>}/> 
        <Route exact path="/Bar" element={<Bar/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>     
        <Route exact path="/AddCustomer" element={<AddCustomer/>}/> 
        <Route exact path="/Faq" element={<Faq/>}/>
        <Route exact path="/ManageCustomer" element={<ManageCustomer/>}/>
        <Route exact path="/Schedule" element={<Schedule/>}/>
        <Route exact path="/AddTask4" element={<AddTask4/>}/> 
        <Route exact path="/AddProject4" element={<AddProject4/>}/>   
        
      </Routes> 
      </BrowserRouter> 
    </div>
    //</ThemeProvider>
    //</ColorModeContext.Provider>
  );
}

export default App;
