const interval = (intervals)=> {
    if(intervals.length === 1){  // Changed from 2 to 1 since length 1 means nothing to merge
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]); // Added sorting to handle merging properly

    for(let i=1; i < intervals.length; i++){  // Changed loop to start from 1
        if(intervals[i][0] <= intervals[i-1][1]){ // Correct condition for overlapping intervals
            intervals[i-1][1] = Math.max(intervals[i][1], intervals[i-1][1]); // Merge intervals
            intervals.splice(i, 1); // Remove merged interval
            i--; // Adjust index after removal
        }
    }
    console.log(intervals);
};interval([[1,6],[34,45],[9,2]]);
interval([1,4],[4,5]);