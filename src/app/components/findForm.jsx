import React from "react";
import PropTypes from "prop-types";

const FindForm = ({ value, onChange }) => {
    // const handleFindSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e);
    // };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="my-2"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

FindForm.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default FindForm;
