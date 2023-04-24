import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllStudents = createAsyncThunk("students/fetch", async () => {
  try {
    const { data } = await axios.get("/api/students");
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const addStudent = createAsyncThunk(
  "students/add",
  async ({ firstName, lastName, email, campusId }) => {
    try {
      const { data } = await axios.post("/api/students", {
        firstName,
        lastName,
        email,
        campusId,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState = {
  students: [],
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.students.push(action.payload);
    });
  },
});

export default studentsSlice.reducer;
