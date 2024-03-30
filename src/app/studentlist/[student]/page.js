"use client"
const StudentDetail = ({params}) => {
  return (
    <div>
        <h2>StudentDetail</h2>
        <p>Name : {params.student}</p>
    </div>
  )
}

export default StudentDetail 