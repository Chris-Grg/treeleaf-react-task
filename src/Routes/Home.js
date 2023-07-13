import React from "react";
import Form from "../components/Form";
import List from "../components/List";
const Home = ({
  userInfo,
  setUserInfo,
  allInfo,
  setAllInfo,
  editContent,
  setEditContent,
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
        allInfo={allInfo}
        setAllInfo={setAllInfo}
        editContent={editContent}
        setEditContent={setEditContent}
      />
    </div>
  );
};

export default Home;
