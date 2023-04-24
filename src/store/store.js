import { configureStore } from "@reduxjs/toolkit";
import campusesReducer from "../features/campuses/campusesSlice";
import studentsReducer from "../features/students/studentsSlice";
import singleCampusReducer from "../features/singleCampus/singleCampusSlice";
import singleStudentReducer from "../features/singleStudent/singleStudentSlice";
//All slices go in here

const store = configureStore({
  reducer: {
    campuses: campusesReducer,
    students: studentsReducer,
    singleCampus: singleCampusReducer,
    singleStudent: singleStudentReducer,
  },
});

export default store;
