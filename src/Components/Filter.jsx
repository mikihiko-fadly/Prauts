import React from "react";

const Filter = ({filterProduct})=>{
    const handleFilterChange = (e)=>{
        filterProduct(e.target.value);
    };

    return(
        <div>
        <label htmlFor="filter">Filter By Color :</label>
        <select  id="filter" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
        </select>
        </div>
    )
}

export default Filter;