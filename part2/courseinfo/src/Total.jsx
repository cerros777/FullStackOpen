import React from 'react'

const Total = ({course}) => {
  const totalExercises = 
    course.parts.reduce((t, p) => t + p.exercises, 0)
  return (
    <div>
      <h5>Number of exercises: {totalExercises}</h5>
    </div>

  )
}

export default Total