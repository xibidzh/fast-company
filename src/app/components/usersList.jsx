import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import api from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import _ from "lodash";
import FindForm from "./findForm";

const UsersList = () => {
    const pageSize = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const [users, setUsers] = useState();
    const [find, setFind] = useState("");
    // console.log(find);

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId)
        );
    };

    const handleToggleBookmark = (id) => {
        const userIndex = users.findIndex((c) => c._id === id);
        const usersList = [...users];
        usersList[userIndex].bookmark = !usersList[userIndex].bookmark;
        setUsers(usersList);
    };

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    useEffect(() => {
        if (find) {
            setSelectedProf();
        }
    }, [find]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleFindChange = (e) => {
        setFind(e.target.value);
    };

    if (users) {
        let filteredUsers = users;
        if (find) {
            filteredUsers = users.filter(
                (user) =>
                    user.name.toLowerCase().indexOf(find.toLowerCase()) >= 0
            );
        }
        if (selectedProf) {
            filteredUsers = users.filter(
                (user) =>
                    JSON.stringify(user.profession) ===
                    JSON.stringify(selectedProf)
            );
        }

        const count = filteredUsers.length;

        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
            setFind("");
        };
        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <FindForm value={find} onChange={handleFindChange} />
                    {count > 0 && (
                        <UserTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToogleBookmark={handleToggleBookmark}
                        />
                    )}

                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return <div className="d-flex justify-content-center">loading...</div>;
};

export default UsersList;
