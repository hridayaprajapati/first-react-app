import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postData } from "../api/AxiosRequest";

export default function CreateTeacher() {
  const [formData, setFormData] = useState({
    teacherName: "",
    teacherEmail: "",
    teacherPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await postData("teachers", formData);
    if (status) {
      navigate("/teachers");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Create teacher</h1>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="teacherName"
                  id="name"
                  className="form-control"
                  value={formData.teacherName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="teacherEmail"
                  id="email"
                  className="form-control"
                  value={formData.teacherEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="teacherPassword"
                  id="password"
                  className="form-control"
                  value={formData.teacherPassword}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
