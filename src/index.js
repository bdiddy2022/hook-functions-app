import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useFetch } from './useFetch';

//Libraries which use hooks!
  // 1) React Router
  // 2) Relay
  // 3) Apollo
  // 4) Even more!

// great website to discover/learn further : usehooks.com

// Custom hook (useFetch) will account for three States: 
//   1) if the data isn't available yet, but it loading
//   2) if the data arrives
//   3) if an error occurs

//putting the custom hook into a separate file cleaned up the component file by... a lot

function App({ login }) {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);

  if (loading) { return (<h1>Loading...</h1>); }
  if (error) { return (<pre>{JSON.stringify(error, null, 2)}</pre>); }

  if (data) {
    return (
      <div>
        <img src={data.avatar_url} alt={data.login} />
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App login="bdiddy2022" />
  </React.StrictMode>
);
// Using useContext and wrapping the root render in its provider allows the chosen component to be accessed app-wide. This would be particularly useful if the given component, for example, contained thousands of items and would need to be used in multiple places within the app 