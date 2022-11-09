import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

export default function StudentDisplay(props) {

   const [students, setStudents] = useState([]);

    useEffect(() => {
      fetch('https://kekambas-bs.herokuapp.com/kekambas')
      .then(res => res.json())
      .then(data => {
          console.log(data);
          setStudents(data)
      })
    })

  return (
    <div>
        <StudentForm />
        <StudentTable students={students} />
    </div>
    )

}