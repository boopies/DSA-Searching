const searchingService = {
    convertToArray(string) {
        return string.split(' ')
    },

    linearSearchTries(array, value) {
        let tries = 0;
        for (let i = 0; i < array.length; i++) {
            tries++
            if (array[i] === value) {
                return tries;
            }
        }
        return "Value not found";
    },

    binarySearchTries(array, value, start, end, tries) {

        tries = tries === undefined ? 0 : tries;
        start = start === undefined ? 0 : start;
        end = end === undefined ? array.length : end;
    
        if (start > end) {
            return -1;
        }
    
        const index = Math.floor((start + end) / 2);
        const item = array[index];
    
        if (item === value) {
            tries++
            return tries;
        }
        else if (item < value) {
            tries++
            return searchingService.binarySearchTries(array, value, index + 1, end, tries);
        }
        else if (item > value) {
            tries++
            return searchingService.binarySearchTries(array, value, start, index - 1, tries);
        }
    }
}

export default searchingService;