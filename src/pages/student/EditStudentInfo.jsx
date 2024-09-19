import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getData, updateData } from "../api/AxiosRequest";

const EditStudentInfo = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentRollNumber: "",
    studentClass: "",
  });

  const { id } = useParams();

  const getStudentInfo = async () => {
    const data = await getData(`students/${id}`);
    setFormData(data.attributes);
  };

  useEffect(() => {
    getStudentInfo();
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
    const status = await updateData(`students/${id}`, formData);
    if (status) {
      navigate("/students");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Edit Student</h1>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="studentName"
                  id="name"
                  className="form-control"
                  value={formData.studentName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="roll" className="form-label">
                  Roll Number
                </label>
                <input
                  type="number"
                  name="studentRollNumber"
                  id="roll"
                  className="form-control"
                  value={formData.studentRollNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="class" className="form-label">
                  Class
                </label>
                <select
                  name="studentClass"
                  id="class"
                  className="form-control"
                  value={formData.studentClass}
                  onChange={handleChange}
                >
                  <option value="">Choose here</option>
                  <option value="BCA">BCA</option>
                  <option value="CSIT">BSc. CSIT</option>
                  <option value="BBA">BBA</option>
                  <option value="BBS">BBS</option>
                </select>
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

export default EditStudentInfo;
