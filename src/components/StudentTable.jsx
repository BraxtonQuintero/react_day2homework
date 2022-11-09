import React from 'react';

export default function StudentTable(props) {

    let tableHeaders = ['ID', 'First Name', 'Last Name']
    return (
        <table className='table table-primary table-striped my-3'>
            <thead>
                <tr>
                    {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.students.map(students => {return (
                    <tr key={students.id}>
                    <th>{students.id}</th>
                    <td>{students.first_name}</td>
                    <td>{students.last_name}</td>
                </tr>
            )})}
        </tbody>
    </table>
  )
}