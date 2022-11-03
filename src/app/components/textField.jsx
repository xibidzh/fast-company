import PropTypes from "prop-types";
import React, { useState } from "react";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const getInputClasses = () => {
        return "form-control " + (error ? "is-invalid" : "is-valid");
    };
    const togglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="mb-4">
            <label htmlFor={name} className="m-2">
                {label}
            </label>
            <div className="input-group">
                <input
                    className={getInputClasses()}
                    // "m-2 form-control is-invalid"
                    type={showPassword ? "text" : type}
                    id={name}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={togglePassword}
                    >
                        {showPassword ? "hide" : "show"}
                    </button>
                )}
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
