import { useEffect, useState } from "react";

import { getData } from "../api/AxiosRequest";
import { useParams } from "react-router-dom";

const SingleStudent = () => {
  const [singleStudent, setSingleStudent] = useState({
    studentName: "",
    studentRollNumber: "",
    studentClass: "",
  });

  const { id } = useParams();

  const getSingleStudent = async () => {
    const data = await getData(`students/${id}`);
    setSingleStudent({
      ...data,
      id: data.id,
    });
  };

  useEffect(() => {
    getSingleStudent();
  }, []);

  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col-12 d-flex flex-column gap-2">
            <h1>Single Student</h1>
            <p>Student ID: {singleStudent.id}</p>
            <p>Student Name: {singleStudent.studentName}</p>
            <p>Student Roll Number: {singleStudent.studentRollNumber}</p>
            <p>Student Course: {singleStudent.studentClass}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStudent;
