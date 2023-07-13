import React from "react";

const EditForm = ({
  allInfo,
  editContent,
  setEdit,
  setAllInfo,
  setEditContent,
  edit,
}) => {
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

  return (
    <div>
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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.com$"
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
          <label htmlFor="dob">DOB</label>
          <input
            className="dob"
            type="date"
            required
            value={editContent.dob}
            onChange={handleInputChange}
            name="dob"
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
    </div>
  );
};

export default EditForm;
