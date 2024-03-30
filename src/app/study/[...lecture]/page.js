"use client"

const Lecture = ({params}) => {
  return (
    <div>
        <h1>Day of collage {params.lecture[0]}</h1>
        <h1>Lecture No {params.lecture[1]}</h1>
    </div>
  )
}

export default Lecture