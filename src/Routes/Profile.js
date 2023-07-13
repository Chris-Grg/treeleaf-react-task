import React, { useState } from "react";
import "../Profile.css";
import EditForm from "../components/EditForm";

const Profile = ({ allInfo, editContent, setAllInfo, setEditContent }) => {
  document.title = "Profiles";
  const [edit, setEdit] = useState(false);

  const toggleEdit = (id) => {
    const info = allInfo.find((info) => info.id === id);
    setEditContent(info);
    setEdit(true);
    console.log(editContent);
  };
  const handleDelete = (id) => {
    const updatedInfo = allInfo.filter((info) => info.id !== id);
    setAllInfo(updatedInfo);
  };
  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profiles</h1>
      <ul className="profile-list">
        {allInfo.map((inf) => (
          <>
            <li key={inf.id} className="profile-item">
              <span className="profile-label">Name:</span> {inf.name} <br />
              <span className="profile-label">Email:</span> {inf.email} <br />
              <span className="profile-label">Phone No.:</span> {inf.phone}{" "}
              <br />
              {inf.dob !== "" ? (
                <>
                  <span className="profile-label">DOB:</span> {inf.dob} <br />
                </>
              ) : (
                <></>
              )}
              <span className="profile-label">Address:</span> {inf.city},{" "}
              {inf.district}, <span className="profile-label">Province:</span>{" "}
              {inf.province}, {inf.country}{" "}
            </li>
            <button onClick={() => toggleEdit(inf.id)}>Edit</button>
            <button onClick={() => handleDelete(inf.id)}>Delete</button>
          </>
        ))}
      </ul>
      {edit ? (
        <EditForm
          allInfo={allInfo}
          editContent={editContent}
          setAllInfo={setAllInfo}
          setEditContent={setEditContent}
          edit={edit}
          setEdit={setEdit}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
