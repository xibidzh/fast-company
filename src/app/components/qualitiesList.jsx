import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <Quality {...qual} key={qual._id} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.object.isRequired
};

export default QualitiesList;
