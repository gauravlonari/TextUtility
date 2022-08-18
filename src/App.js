// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import FormBody from './components/FormBody';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter,HashRouter,Routes,Route } from 'react-router-dom';
import Error404 from './components/Error404';

function App(){

    const dark={color:"#FAF9F6",backgroundColor:"#121212"}
    const light={color:"#000",backgroundColor:"#fff"}
    const [theme,setTheme]=useState(light);
    const toggleTheme=()=>{
        if(theme.color===dark.color){
            setTheme(light);
            document.body.classList.toggle("theme-dark");
            showAlert("success","Switched to Light Mode") 
          }
          else{
            setTheme(dark);
            document.body.classList.toggle("theme-dark"); 
            showAlert("success","Switched to Dark Mode") 
        }
    }


    const [alert,setAlert]=useState(null);
    const showAlert=(type,msg)=>{
      setAlert({msg:msg,type:type});
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }

  return (
    <>
    <HashRouter>
      <Navbar title='Text Utility' first='Home' second='About' toggleTheme={toggleTheme} showAlert={showAlert}></Navbar>
      <Alert alert={alert}></Alert>
      <Routes>
        <Route path='/home' element={<FormBody label="Enter the text: " placeholder="Lorem Ipsum" row={6} theme={theme} showAlert={showAlert}></FormBody>}>
        </Route>
        <Route path='/TextUtility' element={<FormBody label="Enter the text: " placeholder="Lorem Ipsum" row={6} theme={theme} showAlert={showAlert}></FormBody>}>
        </Route>
        <Route path='/' element={<FormBody label="Enter the text: " placeholder="Lorem Ipsum" row={6} theme={theme} showAlert={showAlert}></FormBody>}>
        </Route>
        <Route path='/about' element={<About theme={theme}></About>}>
        </Route>
        <Route path="*" element={<Error404 theme={theme}></Error404>}>
        </Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
