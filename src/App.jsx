import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo'

function App() {

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo></ClassInfo>
      <StudentList></StudentList>
    </main>
  );
}

export default App;
