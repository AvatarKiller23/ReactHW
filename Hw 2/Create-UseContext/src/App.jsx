import logo from './logo.svg';
import './App.css';
import Div from './Components/Div/Div'
import { createContext, useState } from 'react';
import Button from './Components/Button/Button';
import DivWithButton from './Components/DivWithButton/DivWithButton'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  // const changeTheme = () => {
  //   if (theme === 'light') setTheme('dark');
  //   else setTheme('light');
  // }

  const themeObj = {
    theme: theme,
    setTheme: setTheme
  };

  return (
    <>
      <ThemeContext.Provider value={themeObj}>
        
        <Div></Div>
        <DivWithButton/>

        {/* <Button clickHandler={changeTheme}>Change theme</Button> */}

      </ThemeContext.Provider>
    </>
  )
  
}

export default App;
