import React from 'react'

export default function StudentForm(props) {

    function handleSubmit(e){
        e.preventDefault();
        let studentId = e.target.id.value;
        props.updateStudentId(studentId);
    }

  return (
    <form className="row" onSubmit={handleSubmit}>
        <input type="submit" value='Next' className='btn btn-success w-100 my-4' />
    </form>
  )
}