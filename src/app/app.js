import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App = () => {
    const [users, setStatus] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setStatus(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        const newArr = users.map((i) => {
            if (i._id === id) {
                i.bookmark = i.bookmark === false ? true : false;
            }
            return i;
        });
        setStatus(newArr);
    };

    // const handleToggleBookMark = (id) => {
    //     setUsers(
    //         users.map((user) => {
    //             if (user._id === id) {
    //                 return { ...user, bookmark: !user.bookmark };
    //             }
    //             return user;
    //         })
    //     );
    //     console.log(id);
    // };

    return (
        <>
            {<SearchStatus length={users.length} />}
            {
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onBookMark={handleToggleBookMark}
                />
            }
        </>
    );
};

export default App;
