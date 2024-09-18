import { useEffect, useState } from "react";

import { getData } from "../api/AxiosRequest";
import { useParams } from "react-router-dom";

export default function SingleStudent() {
  const [singleStudent, setSingleStudent] = useState({
    studentName: "",
    studentRollNumber: "",
    studentClass: "",
  });

  const { id } = useParams();

  const getSingleStudent = async () => {
    const data = await getData(`students/${id}`);
    setSingleStudent(data.attributes);
  };

  useEffect(() => {
    getSingleStudent();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Single Student</h1>
            <p>{singleStudent.studentName}</p>
            <p>{singleStudent.studentRollNumber}</p>
            <p>{singleStudent.studentClass}</p>
          </div>
        </div>
      </div>
    </>
  );
}
