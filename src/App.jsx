import { useState } from 'react'
import './App.css'

import GeneralInfo from './components/General_Info.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

function App() {
  return (
    <>
      <GeneralInfo />
      <Education />
      <Experience />
    </>
  );
}

export default App
