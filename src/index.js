import React, { useEffect, useReducer, useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {

  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input type="text" value={sound} placeholder='Sound...' onChange={(e) => setSound(e.target.value)}/>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
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
