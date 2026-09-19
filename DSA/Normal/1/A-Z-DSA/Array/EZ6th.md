# Left Rotate an Array by D Places

## Question 1: Left Rotate an Array by D Places

Given an array of `n` elements and an integer `d`, rotate the array to
the **left by `d` places**.

### Example

``` text
Array = [1, 2, 3, 4, 5, 6, 7]
d = 3
```

After rotating the array to the left by 3 positions:

``` text
[4, 5, 6, 7, 1, 2, 3]
```

The first `d` elements move to the end of the array, while the remaining
elements shift toward the beginning.

------------------------------------------------------------------------

# Important Observation: Reduce D Using Modulo

Before thinking about the actual rotation, we should first understand an
important property of an array.

Suppose the array contains **7 elements**:

``` text
[1, 2, 3, 4, 5, 6, 7]
```

If we rotate it left by 7 positions, we get the original array again:

``` text
After 7 rotations:
[1, 2, 3, 4, 5, 6, 7]
```

Therefore:

``` text
7 rotations = 0 effective rotations
```

Similarly:

``` text
8 rotations = 7 + 1 rotations
           = 1 effective rotation
```

So there is no need to actually perform all 8 rotations.

The same idea works for any value of `d`.

If:

``` text
n = size of array
d = number of rotations
```

we can calculate:

``` text
d = d % n
```

This gives us the **actual number of rotations that are necessary**.

### Example

If:

``` text
n = 7
d = 20
```

then:

``` text
20 % 7 = 6
```

So instead of rotating the array 20 times, we only need to rotate it:

``` text
6 times
```

### Why does this work?

Every `n` rotations bring the array back to its original state.

Therefore:

``` text
d rotations
= complete cycles + remaining rotations
```

The complete cycles do not change the final arrangement, so only the
remainder matters.

------------------------------------------------------------------------

# Thinking Before Coding

The most important part of this problem is not writing the code
immediately.

First, understand what actually happens to the elements.

Consider:

``` text
Array = [1, 2, 3, 4, 5, 6, 7]
d = 3
```

We need to rotate the array to the left by 3 positions.

Look at the first three elements:

``` text
1 2 3
```

These elements are going to move to the end.

The remaining elements are:

``` text
4 5 6 7
```

So mentally, we can think of the operation as:

``` text
[1, 2, 3] [4, 5, 6, 7]
```

The first part:

``` text
[1, 2, 3]
```

is temporarily stored.

Then the remaining elements:

``` text
[4, 5, 6, 7]
```

are shifted toward the beginning.

Finally, the temporarily stored elements:

``` text
[1, 2, 3]
```

are placed at the end.

The final result becomes:

``` text
[4, 5, 6, 7, 1, 2, 3]
```

So the complete thought process is:

``` text
1. Find the effective value of d.
2. Store the first d elements temporarily.
3. Shift the remaining elements to the left.
4. Put the temporary elements at the end.
5. The array is now left rotated by d positions.
```

------------------------------------------------------------------------

# Brute Force / Extra Space Approach

The first solution uses an additional temporary array.

The idea is simple:

``` text
Original:
[1, 2, 3, 4, 5, 6, 7]

d = 3
```

## Step 1: Store the first D elements

The first 3 elements are:

``` text
[1, 2, 3]
```

Store them in a temporary array:

``` text
temp = [1, 2, 3]
```

The remaining part of the original array is:

``` text
[4, 5, 6, 7]
```

------------------------------------------------------------------------

## Step 2: Shift the Remaining Elements

Now move:

``` text
4 → index 0
5 → index 1
6 → index 2
7 → index 3
```

So the array becomes:

``` text
[4, 5, 6, 7, _, _, _]
```

The last three positions are now empty from our logical point of view.

------------------------------------------------------------------------

## Step 3: Put the Temporary Elements at the End

Now take the elements from `temp` one by one.

``` text
temp[0] = 1
temp[1] = 2
temp[2] = 3
```

Place them starting from the position after the shifted elements:

``` text
[4, 5, 6, 7, 1, 2, 3]
```

The final answer is:

``` text
[4, 5, 6, 7, 1, 2, 3]
```

------------------------------------------------------------------------

# Understanding the Index Movement

Suppose:

``` text
n = 7
d = 3
```

The original indexes are:

``` text
Index:  0  1  2  3  4  5  6
Array:  1  2  3  4  5  6  7
```

We first store:

``` text
Index 0 → 1
Index 1 → 2
Index 2 → 3
```

So:

``` text
temp = [1, 2, 3]
```

Now the elements from index `d` onward are moved to the beginning.

``` text
Array[3] → Array[0]
Array[4] → Array[1]
Array[5] → Array[2]
Array[6] → Array[3]
```

Therefore:

``` text
[4, 5, 6, 7, _, _, _]
```

Now we need to insert the temporary values starting from index:

``` text
n - d
```

Here:

``` text
n - d = 7 - 3 = 4
```

Therefore:

``` text
temp[0] → Array[4]
temp[1] → Array[5]
temp[2] → Array[6]
```

Final array:

``` text
[4, 5, 6, 7, 1, 2, 3]
```

------------------------------------------------------------------------

# JavaScript Solution --- Extra Space Approach

``` javascript
function leftRotate(arr, d) {
    const n = arr.length;

    // If the array is empty
    if (n === 0) {
        return arr;
    }

    // Reduce unnecessary rotations
    d = d % n;

    // Store the first d elements
    let temp = [];

    for (let i = 0; i < d; i++) {
        temp.push(arr[i]);
    }

    // Shift the remaining elements to the left
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }

    // Put the stored elements at the end
    for (let i = 0; i < d; i++) {
        arr[n - d + i] = temp[i];
    }

    return arr;
}
```

------------------------------------------------------------------------

# How the JavaScript Code Works

Let's understand the code line by line.

## 1. Function Declaration

``` javascript
function leftRotate(arr, d) {
```

The function receives two values:

-   `arr` → the array that needs to be rotated.
-   `d` → the number of left rotations.

------------------------------------------------------------------------

## 2. Find the Size of the Array

``` javascript
const n = arr.length;
```

If:

``` text
arr = [1, 2, 3, 4, 5, 6, 7]
```

then:

``` text
n = 7
```

------------------------------------------------------------------------

## 3. Handle an Empty Array

``` javascript
if (n === 0) {
    return arr;
}
```

If the array has no elements, there is nothing to rotate.

So we simply return it.

------------------------------------------------------------------------

## 4. Reduce D Using Modulo

``` javascript
d = d % n;
```

This is one of the most important lines.

For example:

``` text
n = 7
d = 20
```

Then:

``` text
d = 20 % 7
d = 6
```

So the program only performs the equivalent of 6 rotations.

Another example:

``` text
n = 7
d = 8
```

becomes:

``` text
d = 8 % 7
d = 1
```

------------------------------------------------------------------------

## 5. Create the Temporary Array

``` javascript
let temp = [];
```

We need temporary storage for the first `d` elements.

------------------------------------------------------------------------

## 6. Store the First D Elements

``` javascript
for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
}
```

For:

``` text
arr = [1, 2, 3, 4, 5, 6, 7]
d = 3
```

the loop stores:

``` text
arr[0] → 1
arr[1] → 2
arr[2] → 3
```

Therefore:

``` text
temp = [1, 2, 3]
```

------------------------------------------------------------------------

# 7. Shift the Remaining Elements

``` javascript
for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
}
```

This is the main shifting operation.

Initially:

``` text
[1, 2, 3, 4, 5, 6, 7]
```

For `d = 3`:

``` text
arr[3] → arr[0]
arr[4] → arr[1]
arr[5] → arr[2]
arr[6] → arr[3]
```

So the array becomes logically:

``` text
[4, 5, 6, 7, _, _, _]
```

Notice the formula:

``` text
new index = old index - d
```

For example:

``` text
old index = 5
d = 3

new index = 5 - 3
          = 2
```

Therefore:

``` text
arr[5] → arr[2]
```

------------------------------------------------------------------------

# 8. Put Temporary Elements at the End

``` javascript
for (let i = 0; i < d; i++) {
    arr[n - d + i] = temp[i];
}
```

We need to start inserting at:

``` text
n - d
```

For:

``` text
n = 7
d = 3
```

we get:

``` text
n - d = 4
```

So:

``` text
temp[0] → arr[4]
temp[1] → arr[5]
temp[2] → arr[6]
```

Therefore:

``` text
[4, 5, 6, 7, 1, 2, 3]
```

------------------------------------------------------------------------

# 9. Return the Result

``` javascript
return arr;
```

The rotated array is returned.

------------------------------------------------------------------------

# Complete Example

``` javascript
function leftRotate(arr, d) {
    const n = arr.length;

    if (n === 0) {
        return arr;
    }

    d = d % n;

    let temp = [];

    // Store first d elements
    for (let i = 0; i < d; i++) {
        temp.push(arr[i]);
    }

    // Shift remaining elements
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }

    // Put temp elements at the end
    for (let i = 0; i < d; i++) {
        arr[n - d + i] = temp[i];
    }

    return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 3;

console.log(leftRotate(arr, d));
```

### Output

``` text
[4, 5, 6, 7, 1, 2, 3]
```

------------------------------------------------------------------------

# Dry Run

Let's perform a complete dry run.

### Given

``` text
arr = [1, 2, 3, 4, 5, 6, 7]
d = 3
```

### Step 1 --- Array Size

``` text
n = 7
```

### Step 2 --- Modulo

``` text
d = 3 % 7
d = 3
```

### Step 3 --- Store First D Elements

``` text
temp = [1, 2, 3]
```

Array:

``` text
[1, 2, 3, 4, 5, 6, 7]
```

### Step 4 --- Shift Remaining Elements

``` text
4 → position 0
5 → position 1
6 → position 2
7 → position 3
```

Array:

``` text
[4, 5, 6, 7, _, _, _]
```

### Step 5 --- Copy Temp to End

``` text
1 → position 4
2 → position 5
3 → position 6
```

Final:

``` text
[4, 5, 6, 7, 1, 2, 3]
```

------------------------------------------------------------------------

# Time and Space Complexity

Let:

``` text
n = number of elements
d = effective number of rotations
```

## Time Complexity

We perform three loops:

1.  Store the first `d` elements.
2.  Shift the remaining `n - d` elements.
3.  Put the `d` temporary elements at the end.

Total work:

``` text
d + (n - d) + d
```

which is:

``` text
n + d
```

Since `d <= n` after applying modulo:

``` text
O(n)
```

### Time Complexity

``` text
O(n)
```

------------------------------------------------------------------------

## Space Complexity

We create a temporary array containing `d` elements.

Therefore:

``` text
O(d)
```

In the worst case, `d` can be close to `n`.

So the worst-case auxiliary space is:

``` text
O(n)
```

### Space Complexity

``` text
O(n)
```

------------------------------------------------------------------------

# Important Edge Cases

A good solution should also think about special cases.

## Case 1: D = 0

``` text
arr = [1, 2, 3, 4, 5]
d = 0
```

No rotation is required.

Output:

``` text
[1, 2, 3, 4, 5]
```

------------------------------------------------------------------------

## Case 2: D = N

``` text
arr = [1, 2, 3, 4, 5]
d = 5
```

Since:

``` text
5 % 5 = 0
```

the result remains:

``` text
[1, 2, 3, 4, 5]
```

------------------------------------------------------------------------

## Case 3: D \> N

``` text
arr = [1, 2, 3, 4, 5, 6, 7]
d = 20
```

Calculate:

``` text
20 % 7 = 6
```

So we only need the equivalent of:

``` text
6 rotations
```

------------------------------------------------------------------------

## Case 4: D = N + 1

``` text
n = 7
d = 8
```

Then:

``` text
8 % 7 = 1
```

So 8 rotations are equivalent to just 1 rotation.

------------------------------------------------------------------------

# Key Pattern to Remember

For **left rotation by D positions**, remember this sequence:

``` text
1. n = arr.length
2. d = d % n
3. Store first d elements
4. Shift remaining elements left by d
5. Put stored elements at the end
```

The core movement is:

``` text
[ first d elements ][ remaining elements ]
            ↓
[ remaining elements ][ first d elements ]
```

For example:

``` text
[1, 2, 3] [4, 5, 6, 7]
          ↓
[4, 5, 6, 7] [1, 2, 3]
```

------------------------------------------------------------------------

# Final Takeaway

The most important thing is to understand the **movement of elements**,
rather than memorizing the code.

For a left rotation:

``` text
[1, 2, 3, 4, 5, 6, 7]
```

with:

``` text
d = 3
```

think:

``` text
Take first 3
      ↓
[1, 2, 3] [4, 5, 6, 7]

Move remaining elements left
      ↓
[4, 5, 6, 7] [ ]

Put the stored elements at the end
      ↓
[4, 5, 6, 7] [1, 2, 3]
```

Final answer:

``` text
[4, 5, 6, 7, 1, 2, 3]
```

Once this movement is clear, the code becomes much easier to write.

------------------------------------------------------------------------

## Quick Revision

``` text
Question:
Left rotate an array by D places.

Important formula:
d = d % n

Thinking:
Store first D → Shift remaining → Put stored elements at end

Example:
[1,2,3,4,5,6,7], d = 3

Answer:
[4,5,6,7,1,2,3]

Approach:
Extra Space / Temporary Array

Time:
O(n)

Space:
O(n)
```
