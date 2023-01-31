import React, { useEffect, useReducer, useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useInput } from './useInput';

function App() {

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");


  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetColor();
    resetTitle();
    
  };

  

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder='Sound...' />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
