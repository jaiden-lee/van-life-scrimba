import React from "react";

function VansFilter(props) {
    const {text, handleClick, isSelected} = props;
    return (
        <button onClick={handleClick}
        className={`bg-light-orange-2 text-dark-gray py-1 px-3 text-xs rounded-sm transition-transform hover:scale-105 active:scale-95 ${isSelected ? "selected" : ""} [&.selected]:bg-light-orange-1`}>
            {text}
        </button>
    );
}

export default VansFilter;