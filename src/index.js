import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { isCompositeComponent } from 'react-dom/test-utils';
import './index.css';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [
  ...Array(length)
];

function StarRating({totalStars =5}) {
  return createArray(totalStars).map((n, i) => (
    <Star key={i} />
  ));
}

function Star({selected=false}) {
  return (<FaStar color={selected ? "red" : "gray"}/>);
}

function App() {
  return (
    <StarRating totalStars={10} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
