import { useCallback, useEffect, useState } from "react";

import { getData } from "../api/AxiosRequest";
import { useParams } from "react-router-dom";

const SingleTeacher = () => {
  const [singleTeacher, setSingleTeacher] = useState({
    teacherName: "",
    teacherEmail: "",
    teacherPassword: "",
  });

  const { id } = useParams();

  const getSingleTeacher = useCallback(async () => {
    const data = await getData(`teachers/${id}`);
    setSingleTeacher({
      ...data,
      id: data.id,
    });
  }, [id]);

  useEffect(() => {
    getSingleTeacher();
  }, [getSingleTeacher]);

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
};

export default SingleTeacher;
