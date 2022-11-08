import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/userListPage";
import EditUserPage from "../components/page/userPage/editUserPage";

const Users = () => {
    const { userId, edit } = useParams();
    if (edit) return <EditUserPage id={userId} />;
    return <>{userId ? <UserPage id={userId} /> : <UsersListPage />}</>;
};

export default Users;
