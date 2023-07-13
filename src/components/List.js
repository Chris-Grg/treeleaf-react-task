import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditForm from "./EditForm";

const List = ({ allInfo, setAllInfo, editContent, setEditContent }) => {
  const [edit, setEdit] = useState(false);
  // const [editContent, setEditContent] = useState({});
  const [sortDirection, setSortDirection] = useState("asc");
  const [tableData, setTableData] = useState(allInfo);

  useEffect(() => {
    setTableData(allInfo);
  }, [allInfo]);

  const handleSort = () => {
    const sortedData = [...tableData].sort((a, b) => {
      if (sortDirection === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setTableData(sortedData);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const toggleEdit = (id) => {
    const info = allInfo.find((info) => info.id === id);
    setEditContent(info);
    setEdit(true);
  };

  const handleDelete = (id) => {
    const updatedInfo = allInfo.filter((info) => info.id !== id);
    setAllInfo(updatedInfo);
  };

  return (
    <div className="list-container">
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>
              Name{" "}
              <button className="sort-icon" onClick={handleSort}>
                {sortDirection === "asc" ? "▲" : "▼"}
              </button>
            </th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((info) => (
            <tr key={info.id}>
              <td>{info.name}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
              <td> {info.dob}</td>
              <td>
                {info.city}, {info.district}, Province-
                {info.province}, {info.country}
              </td>
              <td>
                <button onClick={() => toggleEdit(info.id)}>Edit</button>
                <button onClick={() => handleDelete(info.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {edit && (
        <EditForm
          allInfo={allInfo}
          editContent={editContent}
          setAllInfo={setAllInfo}
          setEditContent={setEditContent}
          edit={edit}
          setEdit={setEdit}
        />
      )}

      <div>
        <Link to="/profiles">
          <button className="nextpage-button">Go to Profiles Page</button>
        </Link>
      </div>
    </div>
  );
};

export default List;
