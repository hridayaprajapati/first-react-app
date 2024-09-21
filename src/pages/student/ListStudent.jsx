import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MdOutlineRemoveRedEye, MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

import { deleteData, getData } from "../api/AxiosRequest";

const ListStudent = () => {
  const [listStudent, setListStudent] = useState([]);

  const getListStudent = async () => {
    const data = await getData("students");
    setListStudent(data);
  };

  useEffect(() => {
    getListStudent();
  }, []);

  const handleDelete = async (documentId) => {
    await deleteData(`students/${documentId}`);
    getListStudent();
  };

  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1>List Student</h1>

              <Link
                className="d-flex align-items-center btn btn-info"
                to="/create-student"
              >
                <FaPlus />
                New Student
              </Link>
            </div>

            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Name</th>
                  <th scope="col">Roll Number</th>
                  <th scope="col">Course</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                {listStudent.map((item, idx) => (
                  <tr key={idx}>
                    <th scope="row">{item.id}</th>
                    <td>{item.studentName}</td>
                    <td>{item.studentRollNumber}</td>
                    <td>{item.studentClass}</td>
                    <td className="d-flex gap-2">
                      <Link
                        to={`/students/${item.documentId}`}
                        className="btn btn-success btn-sm d-flex align-items-center gap-2"
                      >
                        <MdOutlineRemoveRedEye />
                        View
                      </Link>
                      <Link
                        to={`/students/${item.documentId}/edit`}
                        className="btn btn-primary btn-sm d-flex align-items-center gap-2"
                      >
                        <CiEdit />
                        Edit
                      </Link>
                      <Link
                        onClick={() => handleDelete(item.documentId)}
                        className="btn btn-danger btn-sm d-flex align-items-center gap-2"
                      >
                        <MdDelete />
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListStudent;
