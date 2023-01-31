import React, { useEffect, useReducer, useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {

  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value; //'current.value" provided by useRef
    const colorValue = color.current.value;
    alert(`${soundValue} sounds like ${colorValue}`);
    sound.current.value="";
    color.current.value="";
  };

  return (
    <form onSubmit={submit}>
      <input type="text" ref={sound} placeholder='Sound...'/>
      <input type="color" ref={color} />
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
