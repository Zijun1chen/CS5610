import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { AiOutlineNotification } from 'react-icons/ai';

const CourseInput = ({ label, value, onChange, type = "text" }) => (
  <div>
    <h5>{label}</h5>
    <input
      value={value}
      type={type}
      className="form-control"
      onChange={onChange}
    />
  </div>
);

const CourseCard = ({ course, setCourse, deleteCourse }) => (
  <div key={course._id} className="col-auto ms-5 mt-4 mb-4" style={{ width: "280px" }}>
    <div className="card h-100">
      <div style={{ backgroundColor: "#a18373", height: "200px" }}>
        <i className="fa-solid fa-ellipsis-vertical float-end me-4 pt-4 text-white fa-lg"></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
          {course.name}
        </Link>
        <p className="card-text">
          {course.number}
          <br />
          <small>{course.startDate}</small><br />
          <small>{course.endDate}</small><br />
          <button onClick={() => deleteCourse(course._id)}>Delete</button>
          <button onClick={() => setCourse(course)}>Edit</button>
        </p>
        <AiOutlineNotification className="float-end me-4" />
      </div>
    </div>
  </div>
);

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse
}) {
  return (
    <div className="wd-dashboard-container">
      <h1>Dashboard</h1>

      <CourseInput
        label="Course Name"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />

      <CourseInput
        label="Course Number"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />

      <CourseInput
        label="Start Date"
        type="date"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />

      <CourseInput
        label="End Date"
        type="date"
        value={course.endDate}
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />

      <hr />
      <button onClick={addNewCourse}>Add</button>
      <button onClick={updateCourse}>Update</button>

      <h2>Published Courses ({courses.length})</h2>
      <div className="row d-flex justify-content-start flex-wrap">
        {courses.map((course) => (
          <CourseCard course={course} setCourse={setCourse} deleteCourse={deleteCourse} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;


