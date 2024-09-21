import { useEffect, useState } from "react";

import { getData } from "../api/AxiosRequest";
import { useParams } from "react-router-dom";

export default function SingleTeacher() {
  const [singleTeacher, setSingleTeacher] = useState({
    teacherName: "",
    teacherEmail: "",
    teacherPassword: "",
  });

  const { id } = useParams();

  const getSingleTeacher = async () => {
    const data = await getData(`teachers/${id}`);
    setSingleTeacher({
      ...data.attributes,
      id: data.id,
    });
  };

  useEffect(() => {
    getSingleTeacher();
  }, []);

  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col-12 d-flex flex-column gap-2">
            <h1>Single Teacher</h1>
            <p>Teacher ID: {singleTeacher.id}</p>
            <p>Teacher Name: {singleTeacher.teacherName}</p>
            <p>Teacher Email: {singleTeacher.teacherEmail}</p>
            {/* <p>Teacher Password:{singleTeacher.teacherPassword}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
