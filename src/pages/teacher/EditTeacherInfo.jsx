import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getData, updateData } from "../api/AxiosRequest";

const EditTeacherInfo = () => {
  const [formData, setFormData] = useState({
    teacherName: "",
    teacherEmail: "",
  });

  const { id } = useParams();

  const getTeacherInfo = async () => {
    const data = await getData(`teachers/${id}`);
    setFormData(data.attributes);
  };

  useEffect(() => {
    getTeacherInfo();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await updateData(`teachers/${id}`, formData);
    if (status) {
      navigate("/teachers");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Edit Teacher</h1>
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
};

export default EditTeacherInfo;
