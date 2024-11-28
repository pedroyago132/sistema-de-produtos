import React from 'react';
import { BrowserRouter, Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Measurement from './pages/Measurement';
import Header from './components/Header';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAb7koTVuiWmEKUSCGpqXbJGhJ_R3uq9ps",
  authDomain: "app-demo-8364b.firebaseapp.com",
  projectId: "app-demo-8364b",
  storageBucket: "app-demo-8364b.firebasestorage.app",
  messagingSenderId: "490590353294",
  appId: "1:490590353294:web:610c6f70533ef610ee56df",
  measurementId: "G-1ZZHB5KJN3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database }


const theme = createTheme({
  colorSchemes: {
    
    light: {
      palette: {
        primary: {
          main: '#FF5733',
          light:'#7F00FF',
          dark:"#7F00FF"
        },

        secondary:{
          main: '#FF5733',
          light:'#7F00FF',
          dark:"#7F00FF"
        },
        
      
        // ...other tokens
      },
      
    },
    dark: {
      palette: {
        primary: {
          main: '#FF5733',
          light:'#7F00FF',
          dark:"#7F00FF"
        },

        secondary:{
          main: '#FF5733',
          light:'#7F00FF',
          dark:"#7F00FF"
        },
       
      },
    },

  },
});

function App() {


  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
     
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
   
  );
}

export default App;