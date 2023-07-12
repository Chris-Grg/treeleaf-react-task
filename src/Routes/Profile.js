import React from "react";
import "../Profile.css"; // Import the CSS file

const Profile = ({ allInfo }) => {
  document.title = "Profiles";
  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profiles</h1>
      <ul className="profile-list">
        {" "}
        {allInfo.map((inf) => (
          <li key={inf.id} className="profile-item">
            {" "}
            <span className="profile-label">Name:</span> {inf.name} <br />
            <span className="profile-label">Email:</span> {inf.id} <br />
            <span className="profile-label">Address:</span> {inf.city},{" "}
            {inf.district}, <span className="profile-label">Province:</span>{" "}
            {inf.province}, {inf.country} <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
