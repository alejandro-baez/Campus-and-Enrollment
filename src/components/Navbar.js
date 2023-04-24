import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllCampuses } from "../features/campuses/campusesSlice";
import { fetchAllStudents } from "../features/students/studentsSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses.campuses);
  const students = useSelector((state) => state.students.students);

  useEffect(() => {
    dispatch(fetchAllCampuses());
    dispatch(fetchAllStudents());
  }, [dispatch]);

  return (
    <div id="nav">
      <Link to="/">
        <img
          className="icon-img"
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>
      <Link to="/students">
        <div className="students-link">Students ({students.length})</div>
      </Link>
      <Link to="/campuses">
        <div className="campuses-link"> Campuses ({campuses.length})</div>
      </Link>
    </div>
  );
};

export default Navbar;
