import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/userListPage";

const Users = () => {
    const { userId } = useParams();

    return <>{userId ? <UserPage id={userId} /> : <UsersListPage />}</>;
};

export default Users;
