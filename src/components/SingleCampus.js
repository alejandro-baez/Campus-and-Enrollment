import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleCampus,
  updateSingleCampus,
} from "../features/singleCampus/singleCampusSlice";
import { fetchAllStudents } from "../features/students/studentsSlice";
import { Link } from "react-router-dom";
import { unregisterStudent } from "../features/singleStudent/singleStudentSlice";

const SingleCampus = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const campus = useSelector((state) => state.singleCampus.singleCampus);
  const students = useSelector((state) => state.students.students);
  const studentsEnrolled = students.filter((student) => student.campusId == id);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleUpdate = async (evt) => {
    evt.preventDefault();
    await dispatch(updateSingleCampus({ id, name, address, description }));
    setName("");
    setAddress("");
    setDescription("");
  };

  const handleUnregister = async (evt) => {
    evt.preventDefault();
    const campusId = null;
    const studentId = evt.target.name;
    await dispatch(unregisterStudent({ studentId, campusId }));
    await dispatch(fetchAllStudents());
  };

  useEffect(() => {
    dispatch(fetchSingleCampus(id));
    dispatch(fetchAllStudents());
  }, [dispatch]);

  return (
    <div id="campus">
      <div className="column-container">
        <h3>{campus.name}</h3>
        <img src={campus.imageUrl} />
        <p>{campus.address}</p>
        <p className="campus-description">{campus.description}</p>

        <div className="form-container">
          <form className="update-form" onSubmit={handleUpdate}>
            <span className="title-form">Update Campus</span>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              required="required"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              value={address}
              required="required"
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
            />

            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              value={description}
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />

            <button className="submit-btn" type="submit">
              {" "}
              Update
            </button>
          </form>
        </div>

        <div>
          {" "}
          Students Enrolled:
          <ul>
            {studentsEnrolled.length ? (
              studentsEnrolled.map((student) => (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {student.firstName}
                  </Link>
                  <button
                    className="unregister-btn"
                    name={student.id}
                    onClick={handleUnregister}
                  >
                    unregister
                  </button>
                </li>
              ))
            ) : (
              <p>No students enrolled at the moment</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCampus;