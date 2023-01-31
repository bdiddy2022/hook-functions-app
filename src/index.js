import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { isCompositeComponent } from 'react-dom/test-utils';
import './index.css';
import { FaStar } from 'react-icons/fa';



const createArray = (length) => [
  ...Array(length)
];

function StarRating({ totalStars = 5 }) {

  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
    {createArray(totalStars).map((n, i) => (
      <Star
        key={i}
        selected={selectedStars > i}
        onSelect={() => setSelectedStars(i + 1)}
      />
      ))}
      <p>{selectedStars} of {totalStars}</p>
    </>
  );
}

function Star({ selected = false, onSelect }) {
  return (<FaStar onClick={onSelect} color={selected ? "red" : "gray"} />);
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
