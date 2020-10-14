
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return matrix = [];
    } else {
    let concat = matrix.reduce(function(result, current, index) {
        if (index%2 !==0) current.reverse()
        return result.concat(current);
    }, []);
    return concat;
}
}

