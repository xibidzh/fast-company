import React from "react";

const SearchStatus = ({ length }) => {
    const renderPhrase = (length) => {
        const lastOne = Number(length.toString().slice(-1));
        if (length > 4 && length < 15) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        if (lastOne === 1) return "человек тусанет";
        else {
            return "человек тусанет";
        }
    };

    const text = (length) => {
        if (length === 0) return "Никто с тобой не тусанет";
        return `${length + " " + renderPhrase(length)} с тобой сегодня`;
    };

    const createClass = (length) => {
        if (length > 0) return "m-2 badge bg-primary";
        return "m-2 badge bg-danger";
    };

    return (
        <span className={createClass(length)}>
            <h5> {text(length)} </h5>
        </span>
    );
};

export default SearchStatus;
