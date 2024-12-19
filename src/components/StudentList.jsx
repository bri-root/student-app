import './StudentList.css';
import Student from './Student';

const StudentList = (props) => {

    const studentComponents = props.students.map(student =>{
        return (
            <li><Student name={student.nameData} email={student.emailData}></Student></li>
        );
    });
    return (
        <section>
            <h2>Student List</h2>
            <ul>
                {studentComponents}
            </ul>
        </section>
    );
};
export default StudentList;