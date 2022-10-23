import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    const history = useHistory();

    const handleToUsers = () => {
        history.replace("/users");
    };

    if (user) {
        return (
            user && (
                <div className="m-2">
                    <h2>{user.name}</h2>
                    <h3>{`Профессия: ${user.profession.name}`}</h3>
                    <h3>{`Количество встреч: ${user.completedMeetings}`}</h3>
                    <QualitiesList qualities={user.qualities} />
                    <h3>{`Рейтинг: ${user.rate}`}</h3>
                    <button
                            className="btn btn-outline-primary m-2"
                            onClick={() => {
                                handleToUsers();
                            }}>
                            Все пользователи
                    </button>
                </div>
            )
        );
    }

    return (<div className="d-flex justify-content-center"> {"Loading..."} </div>);
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
