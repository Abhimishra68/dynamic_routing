import React from 'react'
import { useParams } from 'react-router-dom';

function CourseDetails(){
        const params = useParams();
        console.log(params.CourseId);

  return (
    <div>
        <h1>{params.CourseId} Courses Details Page</h1>
    </div>
  )
}

export default CourseDetails