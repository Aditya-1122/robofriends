import React from 'react'
import './SearchBox.css';

const SearchBox=({searchChange})=>
{
    return(
        <div className="centr">
            <input type="search" placeholder="Search Robofriend"  onChange={searchChange} className="centr" />
        </div>
    )
}
export default SearchBox;