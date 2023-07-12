import React from "react";
import Form from "../components/Form";
import List from "../components/List";
const Home = ({
  userInfo,
  setUserInfo,
  allInfo,
  setAllInfo,
  editedInfo,
  setEditedInfo,
}) => {
  return (
    <div>
      <Form
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        allInfo={allInfo}
        setAllInfo={setAllInfo}
      />
      <List
        userInfo={userInfo}
        editedInfo={editedInfo}
        allInfo={allInfo}
        setEditedInfo={setEditedInfo}
        setAllInfo={setAllInfo}
      />
    </div>
  );
};

export default Home;
