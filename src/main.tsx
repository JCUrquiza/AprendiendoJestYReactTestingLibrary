import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import './styles.css';

// { createRoot }


const appElement = document.getElementById('root');

if (appElement) {
  const appRoot = ReactDOM.createRoot(appElement);
  appRoot.render(
    <React.StrictMode>
      {/* 
      <HelloWorldApp />
      <FirstApp title='Hola soy JC' />
      */}
      <CounterApp value={ 100 } />
    </React.StrictMode>
  );
} else {
  console.error('No se encontró un elemento con id="app" en el DOM.');
}



/*
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp />
    </React.StrictMode>
)



const root = createRoot(document.getElementById('root'));
root.render(HelloWorldApp);
*/
