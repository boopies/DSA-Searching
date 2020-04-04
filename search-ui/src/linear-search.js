import React from 'react';
import searchingService from './searching-service';

function LinearSearch(props) {

    const tries = searchingService.linearSearchTries(props.array, props.value);


    const message = props.value
        ? 
        <div>
            <h2>Linear Search Tries</h2>
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

export default LinearSearch;