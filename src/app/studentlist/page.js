import Link from "next/link";
import React from "react";

const StudentList = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/sachin">Sachin</Link>
        </li>
        <li>
          <Link href="/studentlist/kumar">Sachin</Link>
        </li>
        <li>
          <Link href="/studentlist/jha">Sachin</Link>
        </li>
        <li>
          <Link href="/studentlist/palak">Sachin</Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentList;
