import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    const sortDirection = (selectedSort) => {
        const up = "bi bi-caret-up-fill";
        const down = "bi bi-caret-down-fill";
        if (selectedSort.order === "asc") {
            return down;
        } return up;
    };

    return (
        <thead>
                <tr>
                    {Object.keys(columns).map((column) => (
                        <th {...{ role: columns[column].path && "button" }}
                            key={column}
                            onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
                            scope="col">
                            <p className={sortDirection}>{columns[column].name} </p>
                        </th>
                    ))}
                </tr>
        </thead>
     );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
