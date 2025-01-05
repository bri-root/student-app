import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { useState } from 'react';
import NewStudentForm from './components/NewStudentForm';

const kInitialStudentData = [
  {
    id: 1,
    nameData: 'Ada',
    emailData: 'ada@dev.org',    isPresentData: false,
  },
  {
    id: 2,
    nameData: 'Soo-ah',
    emailData: 'sooah@dev.org',
    isPresentData: false,
  },
  {
    id: 3,
    nameData: 'Chrissy',
    emailData: 'chrissy@dev.org',
    isPresentData: true,
  }
];

function App() {
  const [studentData, setStudentData] = useState(kInitialStudentData);

  const toggleStudentPresence = (studentId) => {
    // calculate the updated student data by finding the student that matches
    // the passed id, making a copy with object spreading, then overwriting
    // the presence value with its inverse
    const students = studentData.map(student => {
      if (student.id === studentId) {
        // this was the toggled student, so make a new record with the updated
        // presence value
        return { ...student, isPresentData: !student.isPresentData };
      } else {
        // this was not the student who was toggled, so we can use the existing
        // data in the new student array
        return student;
      }
    });
    // uses value-passing style to update the student data, but could be
    // refactored to use function-passing style
    setStudentData(students);
  };

  // function to delete all student data
  const deleteStudents = () => {
    setStudentData([]);
  };

  const addStudentData = ({nameData, emailData}) => {
    setStudentData(studentData => {
      return [...studentData, {
        id: Math.max(0, ...studentData.map(student => student.id)) +1,
        nameData,
        emailData,
        isPresentData:false,
      }];
    });
  };

  
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <button onClick={() => deleteStudents()}>Delete All Students!</button>
      <StudentList 
      students={studentData}
      onStudentPresenceToggle={toggleStudentPresence}
      ></StudentList>
      <NewStudentForm
      onStudentAdd={addStudentData}></NewStudentForm>
    </main>
  );
}

export default App;
