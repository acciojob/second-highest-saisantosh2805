//your JS code here. If required.
function secondHighest(arr) {
    // Check if the array has less than 2 elements
    if (arr.length < 2) return -Infinity;
    
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            // Update both first and second
            second = first;
            first = num;
        } else if (num > second && num < first) {
            // Update second if num is between first and second
            second = num;
        }
    }

    // If second is still -Infinity, it means there was no valid second-highest number
    return second === -Infinity ? -Infinity : second;
}

// Test cases
console.log(secondHighest([5, 1, 2, 3, 4])); // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // Output: -2
console.log(secondHighest([])); // Output: -Infinity
console.log(secondHighest([1])); // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1])); // Output: -Infinity
Explanation: