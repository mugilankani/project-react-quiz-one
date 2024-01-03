

import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './Components/ResultComponent';

function App() {
 return (
   <div className="appContainer">
     <HomeComponent />
     <QuizComponent />
     <ResultComponent />
   </div>
 );
}


export default App;