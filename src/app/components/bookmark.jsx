import React from "react";
import PropTypes from 'prop-types';

const BookMark = ({ status, ...rest }) => {
    const name = () => {
        return status === true ? "bi bi-bookmark-heart-fill" : "bi bi-bookmark";
    };
    return (
        <button
            className={name()}
            onClick={() => rest.onBookMark(rest.user._id)}
        ></button>
    );
};

BookMark.propTypes = {
    status: PropTypes.number.isRequired
}

export default BookMark;
