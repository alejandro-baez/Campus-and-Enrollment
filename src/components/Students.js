import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  fetchAllStudents,
} from "../features/students/studentsSlice";
import { Link } from "react-router-dom";
import { fetchAllCampuses } from "../features/campuses/campusesSlice";
import { deleteSingleStudent } from "../features/singleStudent/singleStudentSlice";

const Students = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [campusId, setCampusId] = useState("");

  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const campuses = useSelector((state) => state.campuses.campuses);

  const handleSubmitCreate = async (evt) => {
    evt.preventDefault();
    dispatch(addStudent({ firstName, lastName, email, campusId }));
  };

  const handleDelete = async (evt) => {
    evt.preventDefault();
    await dispatch(deleteSingleStudent(evt.target.value));
    await dispatch(fetchAllStudents());
  };

  useEffect(() => {
    dispatch(fetchAllStudents());
    dispatch(fetchAllCampuses());
  }, [dispatch]);
  return (
    <div id="students">
      <div className="column-container">
        {students.map((student) => (
          <div className="single-student" key={student.id}>
            <h4>
              {student.firstName} {student.lastName}
            </h4>
            <Link to={`/students/${student.id}`}>
              {`< Details for ${student.firstName} >`}
            </Link>
            <button
              className="remove-btn"
              value={student.id}
              onClick={handleDelete}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <form className="create-form" onSubmit={handleSubmitCreate}>
        <span className="title-form">Add Student</span>
        <label htmlFor="firstName"> First Name: </label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          required="required"
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          required="required"
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          required="required"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="campus">Campus: </label>
        <select
          name="campusId"
          className="campus-btn"
          onChange={(e) => setCampusId(e.target.value)}
        >
          {campuses.map((campus) => (
            <option value={campus.id} key={campus.id}>
              {campus.name}
            </option>
          ))}
        </select>

        <button className="submit-btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Students;
