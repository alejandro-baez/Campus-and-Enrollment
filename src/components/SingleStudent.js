import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleStudent,
  updateSingleStudent,
} from "../features/singleStudent/singleStudentSlice";
import { fetchAllCampuses } from "../features/campuses/campusesSlice";
import { Link } from "react-router-dom";

const SingleStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [campusId, setCampusId] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.singleStudent.singleStudent);

  const campuses = useSelector((state) => state.campuses.campuses);
  const studentCampus = campuses.filter(
    (campus) => campus.id == student.campusId
  );

  const handleUpdate = async (evt) => {
    evt.preventDefault();
    await dispatch(
      updateSingleStudent({ id, firstName, lastName, email, campusId })
    );
    await dispatch(fetchSingleStudent(id));
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  useEffect(() => {
    dispatch(fetchSingleStudent(id));
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  return (
    <div id="student">
      <div className="column-container">
        <h3>Detail Page for {student.firstName}</h3>
        <div>
          {`${student.firstName} - `}

          {student.campusId ? (
            <Link to={`/campuses/${student.campusId}`}>
              {" "}
              attends {studentCampus.map((campus) => campus.name)}
            </Link>
          ) : (
            <span>Not Registered at a College</span>
          )}
        </div>
        <p>{`${student.firstName} ${student.lastName}`}</p>
        <img src={`${student.imageUrl}`} alt="" />
        <p>Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>
      </div>

      <div className="form-container">
        <form className="update-form" onSubmit={handleUpdate}>
          <span className="title-form">Update Student</span>

          <label htmlFor="firstName">First Name: </label>
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

          <label htmlFor="chooseCampus">Campus: </label>
          <select
            name="campusId"
            id="update-campus"
            onChange={(e) => setCampusId(e.target.value)}
          >
            {campuses.map((campus) => (
              <option value={campus.id} key={campus.id}>
                {campus.name}
              </option>
            ))}
          </select>

          <button className="submit-btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleStudent;
