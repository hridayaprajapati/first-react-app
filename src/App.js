import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import Profile from "./pages/Profile";

import Sidebar from "./components/Sidebar";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListStudent from "./pages/student/ListStudent";
import SingleStudent from "./pages/student/SingleStudent";
import CreateStudent from "./pages/student/CreateStudent";
import EditStudentInfo from "./pages/student/EditStudentInfo";

import ListTeacher from "./pages/teacher/ListTeacher";
import SingleTeacher from "./pages/teacher/SingleTeacher";
import CreateTeacher from "./pages/teacher/CreateTeacher";
import EditTeacherInfo from "./pages/teacher/EditTeacherInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/students" element={<ListStudent />} />
          <Route path="/students/:id" element={<SingleStudent />} />
          <Route path="/students/:id/edit" element={<EditStudentInfo />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/teachers" element={<ListTeacher />} />
          <Route path="/teachers/:id" element={<SingleTeacher />} />
          <Route path="/teachers/:id/edit" element={<EditTeacherInfo />} />
          <Route path="/create-teacher" element={<CreateTeacher />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
