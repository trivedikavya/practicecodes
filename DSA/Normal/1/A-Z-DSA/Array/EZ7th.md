Question:
Move all zeros to the end of an array.

Problem:
Given an array containing numbers and zeros, move all the
zeros to the end while keeping the order of non-zero elements
the same.

Example:
[1,0,2,3,2,0,0,4,5,1]

Non-zero elements:
[1,2,3,2,4,5,1]

There are 10 elements in the original array and 7 non-zero
elements in the temporary array.

So, 10 - 7 = 3 positions are left.

Put 0 in those remaining positions.

Answer:
[1,2,3,2,4,5,1,0,0,0]


Thinking Logically:

1. Create an empty temporary array.
2. Traverse the original array using a loop.
3. Check every element.
4. If the element is NOT zero, add it to the temporary array.
5. After the loop, the temporary array contains only non-zero
   elements in the same order.
6. Compare the original array length with the temporary array length.
7. The remaining positions are filled with 0.
8. The final array has all non-zero elements first and all zeros
   at the end.


Approach:
Brute Force / Extra Space / Temporary Array

We are using an additional array to store all non-zero elements.

Time:
O(n)

Space:
O(n)


JavaScript Code:

function moveZerosToEnd(arr) {

    // Step 1: Create temporary array
    let temp = [];

    // Step 2: Store only non-zero elements
    for (let i = 0; i < arr.length; i++) {

        // If element is not zero
        if (arr[i] !== 0) {
            temp.push(arr[i]);
        }
    }

    // Step 3: Find how many zeros are remaining
    let zeroCount = arr.length - temp.length;

    // Step 4: Add zeros to the end
    for (let i = 0; i < zeroCount; i++) {
        temp.push(0);
    }

    // Step 5: Return final array
    return temp;
}


// Example
let arr = [1,0,2,3,2,0,0,4,5,1];

console.log(moveZerosToEnd(arr));

// Output:
// [1,2,3,2,4,5,1,0,0,0]


Code Explanation:

let temp = [];

Creates an empty temporary array where we will store
only the non-zero elements.


for (let i = 0; i < arr.length; i++)

Runs a loop through every element of the original array.


if (arr[i] !== 0)

Checks whether the current element is non-zero.

If it is non-zero, we add it to the temporary array.


temp.push(arr[i]);

Adds the non-zero element into the temporary array.

For example:

Original:
[1,0,2,3,2,0,0,4,5,1]

After this loop:

temp = [1,2,3,2,4,5,1]


let zeroCount = arr.length - temp.length;

Finds how many zeros need to be added.

Original array length = 10
Non-zero elements = 7

Therefore:

zeroCount = 10 - 7
          = 3


for (let i = 0; i < zeroCount; i++) {
    temp.push(0);
}

Runs 3 times and adds three zeros at the end.

temp:

[1,2,3,2,4,5,1,0,0,0]


return temp;

Returns the final array.


Quick Summary:

Question:
Move all zeros to the end.

Logic:
Store only non-zero elements → Count remaining positions →
Fill remaining positions with 0.

Example:

[1,0,2,3,2,0,0,4,5,1]

        ↓

[1,2,3,2,4,5,1]

        ↓ Add remaining 3 zeros

[1,2,3,2,4,5,1,0,0,0]

Approach:
Brute Force using Temporary Array

Time:
O(n)

Space:
O(n)

Key Idea:
Non-zero elements are collected first, and the empty positions
are filled with zeros at the end.
