import React from 'react';
import searchingService from './searching-service';

function BinarySearch(props) {
    
    const array = props.array;
    if (array) {
        array.sort();
    }

    const tries = searchingService.binarySearchTries(array, props.value);


    const message = props.value
        ? 
        <div>
            <h2>Binary Search Tries</h2>
            <p>{tries}</p>
        </div>
        :
        '';


    return(
        <div>
            {message}
        </div>
    )
}

export default BinarySearch;