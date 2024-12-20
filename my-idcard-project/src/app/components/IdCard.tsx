
// "use client";
// import React from "react";
// import Image from "next/image";

// // Define the type for the student prop
// type Student = {
//   name: string;
//   age: number;
//   rollNumber: string;
//   className: string;
//   imageUrl: string;
//   gender: string;
//   city: string;
  
// };

// interface StudentCardProps {
//   student: Student;
// }

// const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
//   return (
//     <div className="student-card">
//       <div className="text-left">
//       <img src={student.imageUrl} alt={student.name} />
//       <h2>{student.name}</h2>
//       <p>Age: {student.age}</p>
//       <p>Roll Number: {student.rollNumber}</p>
//       <p>Class: {student.className}</p>
//       <p>City: {student.city}</p>
//       </div>
//     </div>
//   );
// };

// export default StudentCard;




"use client";
import React from "react";
import Image from "next/image";

// Define the type for the student prop
type Student = {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
  imageUrl: string;
  gender: string;
  city: string;
};

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="student-card">
      <div className="text-left">
        <Image
          src={student.imageUrl}
          alt={student.name}
          width={150}
          height={150}
          objectFit="cover" // Optional: Crop to fit the given dimensions
        />
        <h2>{student.name}</h2>
        <p>Age: {student.age}</p>
        <p>Roll Number: {student.rollNumber}</p>
        <p>Class: {student.className}</p>
        <p>City: {student.city}</p>
      </div>
    </div>
  );
};

export default StudentCard;
