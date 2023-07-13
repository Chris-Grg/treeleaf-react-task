import React from "react";

const Form = ({ userInfo, setUserInfo, allInfo, setAllInfo }) => {
  const handleChange = (e) => {
    const name = e.target.className;
    const value = e.target.value;
    console.log(name, value);
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfo = { ...userInfo, id: new Date().getTime().toString() };
    setAllInfo([...allInfo, newInfo]);
    setUserInfo({
      name: "",
      email: "",
      phone: "",
      dob: "",
      city: "",
      district: "",
      province: "",
      country: "Nepal",
    });
  };

  return (
    <div className="input-form">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">
            Name <span className="required-symbol">*</span>
          </label>
          <input
            className="name"
            type="text"
            placeholder="Name"
            value={userInfo.name}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">
            Email <span className="required-symbol">*</span>
          </label>
          <input
            className="email"
            type="email"
            placeholder="name@example.com"
            required
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="phone">
            Phone Number <span className="required-symbol">*</span>
          </label>
          <input
            className="phone"
            type="tel"
            pattern="[0-9]{7,10}"
            placeholder="eg: 5512345"
            required
            value={userInfo.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="dob">D.O.B.</label>
          <input
            className="dob"
            type="date"
            value={userInfo.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="form-item">
            <label htmlFor="city">City</label>
            <input
              className="city"
              type="text"
              onChange={handleChange}
              value={userInfo.city}
            />
          </div>
          <div className="form-item">
            <label htmlFor="district">District</label>
            <input
              className="district"
              type="text"
              onChange={handleChange}
              value={userInfo.district}
            />
          </div>
          <div className="form-item">
            <label htmlFor="province" required>
              Province
            </label>
            <select
              className="province"
              onChange={handleChange}
              value={userInfo.province}
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
          <div className="form-item">
            <label htmlFor="country">Country</label>
            <input
              className="country"
              // onChange={handleChange}
              readOnly
              value={userInfo.country}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
