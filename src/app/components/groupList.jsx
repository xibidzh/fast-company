import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    return (
        <ul className="list-group">
            { Object.keys(items).map(item =>
                <li className= {"list-group-item" + (items[item] === selectedItem ? " active" : "")}
                    role="button"
                    onClick={() => onItemSelect(items[item])}
                    key={items[item][valueProperty]}> {items[item][contentProperty]}
                </li>) }
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
