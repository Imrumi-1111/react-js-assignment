import React from 'react'
//import logo from './logo.svg';
import './App.css';
import { Invitation } from './components/invitation'


function App() {
  return (
    <div className="App">
       <Invitation subject={"Birthday party Invitation"} emailid= {"jaGdish@gmail.com"} name={" jaGdish"} invitation={"birthday party"} friends={"Ritu , Saurabh , Kartik"} near={"Green field Avenue"} host={"JaGdish"} />

    </div>
  );
}

export default App;
