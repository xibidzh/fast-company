import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "../api/";

const App = () => {
  const [users, setStatus] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setStatus(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookmark = (id) => {
    const newArr = users.map((i) => {
      if (i._id === id) {
        i.bookmark = i.bookmark === false ? true : false;
      }
      return i;
    });
    setStatus(newArr);
  };

  return (
    <>
      {<SearchStatus length={users.length} />}
      {
        <Users
          users={users}
          onDelete={handleDelete}
          onBookMark={handleToggleBookmark}
        />
      }
    </>
  );
};

export default App;