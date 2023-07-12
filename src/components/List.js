import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = ({ allInfo, setAllInfo }) => {
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState({});
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

  const handleEdit = () => {
    const updatedInfo = allInfo.map((info) => {
      if (info.id === editContent.id) {
        return editContent;
      }
      return info;
    });
    setAllInfo(updatedInfo);
    setEdit(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditContent((prevContent) => ({ ...prevContent, [name]: value }));
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
        <div className="edit-form">
          <div className="edit-form-item">
            <label htmlFor="name">Name</label>
            <input
              className="name"
              type="text"
              placeholder="Name"
              value={editContent.name}
              required
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="edit-form-item">
            <label htmlFor="email">Email</label>
            <input
              className="email"
              type="email"
              placeholder="name@example.com"
              required
              value={editContent.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="edit-form-item">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="phone"
              type="tel"
              pattern="[0-9]{7,10}"
              placeholder="eg: 5512345"
              minLength="7"
              required
              value={editContent.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>
          <div className="edit-form-item">
            <label htmlFor="city">City</label>
            <input
              className="city"
              type="text"
              value={editContent.city}
              onChange={handleInputChange}
              name="city"
            />
          </div>
          <div className="edit-form-item">
            <label htmlFor="district">District</label>
            <input
              className="district"
              type="text"
              value={editContent.district}
              onChange={handleInputChange}
              name="district"
            />
          </div>
          <div className="edit-form-item">
            <label htmlFor="province">Province</label>
            <select
              className="province"
              value={editContent.province}
              onChange={handleInputChange}
              name="province"
            >
              <option value="">Select One</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="edit-form-item">
            <label htmlFor="country">Country</label>
            <select
              className="country"
              value={editContent.country}
              name="country"
              onChange={handleInputChange}
            >
              <option value="Nepal">Nepal</option>
            </select>
          </div>
          <button type="submit" className="update-button" onClick={handleEdit}>
            Update
          </button>
        </div>
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
