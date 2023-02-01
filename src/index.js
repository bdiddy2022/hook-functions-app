import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const TreesContext = createContext();

export const useTrees = () => useContext(TreesContext);

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Family" },
  { id: "4", type: "Component" }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={ {trees} }>
    <App />
  </TreesContext.Provider>
);
// Using useContext and wrapping the root render in its provider allows the chosen component to be accessed app-wide. This would be particularly useful if the given component, for example, contained thousands of items and would need to be used in multiple places within the app 