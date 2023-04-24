import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCampus,
  fetchAllCampuses,
} from "../features/campuses/campusesSlice";
import { Link } from "react-router-dom";
import { fetchAllStudents } from "../features/students/studentsSlice";
import { deleteSingleCampus } from "../features/singleCampus/singleCampusSlice";

const Campuses = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const campuses = useSelector((state) => state.campuses.campuses);
  const students = useSelector((state) => state.students.students);

  const handleSubmitCreate = async (evt) => {
    evt.preventDefault();
    await dispatch(addCampus({ name, address }));
    setName("");
    setAddress("");
  };

  const handleDelete = async (evt) => {
    evt.preventDefault();
    await dispatch(deleteSingleCampus(evt.target.value));
    await dispatch(fetchAllCampuses());
  };

  useEffect(() => {
    dispatch(fetchAllCampuses());
    dispatch(fetchAllStudents());
  }, [dispatch]);

  return (
    <div id="campuses">
      <div className="column-container">
        {campuses.map((campus) => (
          <div className="single-campus" key={campus.id}>
            <h3>{campus.name}</h3>
            <div>
              {" "}
              Enrolled:{" "}
              {
                students.filter((student) => student.campusId === campus.id)
                  .length
              }
            </div>

            <img src={campus.imageUrl}></img>
            <div>
              <Link
                to={`/campuses/${campus.id}`}
              >{`< Details for ${campus.name} >`}</Link>
              <button
                className="remove-btn"
                value={campus.id}
                onClick={handleDelete}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>

      <form className="create-form" onSubmit={handleSubmitCreate}>
        <span className="title-form">Add Campus</span>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          placeholder="name"
          value={name}
          required="required"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="address">Address: </label>
        <input
          name="address"
          placeholder="address"
          value={address}
          required="required"
          onChange={(e) => setAddress(e.target.value)}
        />

        <button className="submit-btn" type="Submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Campuses;
