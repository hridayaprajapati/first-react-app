import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteData, getData } from "../api/AxiosRequest";

import { MdOutlineRemoveRedEye, MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const ListTeacher = () => {
  const [listTeacher, setListTeacher] = useState([]);

  const getListTeacher = async () => {
    const data = await getData("teachers");
    setListTeacher(data);
  };

  useEffect(() => {
    getListTeacher();
  }, []);

  const handleDelete = async (documentId) => {
    await deleteData(`teachers/${documentId}`);
    getListTeacher();
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1>List Teacher</h1>
              <Link
                className="d-flex align-items-center btn btn-info"
                to="/create-teacher"
              >
                <FaPlus />
                New Teacher
              </Link>
            </div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                {listTeacher.map((item, idx) => (
                  <tr key={idx}>
                    <th scope="row">{item.id}</th>
                    <td>{item.teacherName}</td>
                    <td>{item.teacherEmail}</td>
                    <td className="d-flex gap-2">
                      <Link
                        to={`/teachers/${item.documentId}`}
                        className="btn btn-success btn-sm d-flex align-items-center gap-2"
                      >
                        <MdOutlineRemoveRedEye />
                        View
                      </Link>
                      <Link
                        to={`/teachers/${item.documentId}/edit`}
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

export default ListTeacher;
