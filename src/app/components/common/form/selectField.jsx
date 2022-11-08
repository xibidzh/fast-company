import PropTypes from "prop-types";
import React from "react";

const SelectField = ({
    label,
    value,
    onChange,
    defaultOption,
    options,
    name,
    error
}) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  name: options[optionName].name,
                  //   name: optionName,
                  value: options[optionName]._id
              }))
            : options;

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const getInputClasses = () => {
        return "form-select " + (error ? "is-invalid" : "is-valid");
    };

    return (
        <div className=" mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                className={getInputClasses()}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option
                            value={option.value}
                            key={option.value + option.name}
                        >
                            {option.name}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    defaultOption: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    error: PropTypes.string
};

export default SelectField;
