
"use client";
import React from "react";
import IdCard from "./components/IdCard";



const students = [
  {
    name: "Zoraiz Ahmed",
    age: 20,
    rollNumber: "23451",
    className: "GIAIC",
    imageUrl: "/images/zoraiz.jpg",
    gender: "Male",
    city: "Karachi",
  },
  {
    name: "Kiswa Noor",
    age: 22,
    rollNumber: "24678",
    className: "GIAIC",
    imageUrl:"/images/student1.jpg" ,
    gender: "Female",
    city: "Karachi",
  },
  {
    name: "Mahnoor Raheel",
    age: 19,
    rollNumber: "76654",
    className: "GIAIC",
    imageUrl: "/images/kiara.jpg",
    gender: "Male",
    city: "Karachi",
  },
];

export default function Home() {
  return (
    <div className="home">
      <h1 className="title text-center text-bold text-5xl text-transform: uppercase ">Student ID Cards</h1>
      <div className="student-cards">
        {students.map((student, index) => (
          <IdCard key={index} student={student} />
        ))}
      </div>

      <style jsx>{`
        .home {
          text-align: center;
          padding: 20px;
        }
        .student-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `}</style><br />
      <div>
        <h2 className="text-center text-3xl font-bold text-b text-underline-offset: 8px text-transform: uppercase text-black-800 underline hover:underline-offset-4">
        Created by Mahnoor Latif
        </h2>
      </div>
    </div>
    
  );
}