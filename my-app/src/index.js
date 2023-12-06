import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kim from './Kim';
import Garage from './Garage';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

function MyForm(){
  const [name, setName] = useState("");

  const handleSubmit = (event)=>{
    event.preventDefault();
    alert(`당신의 이름은: ${name}`)
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>이름을 입력하세요
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
        />
      </label>
      <input type="submit"/>
    </form>
  )
}

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const myElement = <h1>I Love SERO</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Kim />
    <Goal isGoal={true} />
    <Garage />
    <MyForm />
    {myElement}
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
