# Left Rotate an Array by One Place

##  Question

**Given an array, left rotate the array by one place.**

### Example

Consider the array:

```text
arr = [1, 2, 3, 4, 5]
```

After **left rotating the array by one place**, the first element `1` moves to the end, and every other element shifts one position to the left.

### Input

```text
[1, 2, 3, 4, 5]
```

### Output

```text
[2, 3, 4, 5, 1]
```

---

## What Does Left Rotation Mean?

In a **left rotation by one place**:

* The element at index `0` is removed temporarily.
* Every element from index `1` to `n - 1` is shifted **one position to the left**.
* The original first element is placed at the last position.

For example:

```text
Before:

Index:  0  1  2  3  4
Array:  1  2  3  4  5

After Left Rotation:

Index:  0  1  2  3  4
Array:  2  3  4  5  1
```

---

##  Logic / Approach

The main idea is to shift every element one position towards the left.

### Step 1: Store the first element

The element at index `0` will eventually have to be placed at the last position.

So, first store:

```text
temp = arr[0]
```

For:

```text
[1, 2, 3, 4, 5]
```

we get:

```text
temp = 1
```

---

### Step 2: Shift elements from index `1` to `n - 1`

Start a loop from index `1` and continue until `n - 1`.

For every element:

```text
arr[i - 1] = arr[i]
```

This means the current element is copied into the position immediately before it.

The array changes like this:

```text
[1, 2, 3, 4, 5]
```

After shifting `2`:

```text
[2, 2, 3, 4, 5]
```

After shifting `3`:

```text
[2, 3, 3, 4, 5]
```

After shifting `4`:

```text
[2, 3, 4, 4, 5]
```

After shifting `5`:

```text
[2, 3, 4, 5, 5]
```

At this point, the first element was already stored in `temp`.

---

### Step 3: Put the first element at the last position

Now place the stored first element at index `n - 1`:

```text
arr[n - 1] = temp
```

So:

```text
[2, 3, 4, 5, 5]
```

becomes:

```text
[2, 3, 4, 5, 1]
```

Therefore, the final answer is:

```text
[2, 3, 4, 5, 1]
```

---

##  JavaScript Implementation

```javascript
function leftRotate(arr, n) {

    // Store the first element
    let temp = arr[0];

    // Shift every element one position to the left
    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i];
    }

    // Place the first element at the last position
    arr[n - 1] = temp;

    return arr;
}

// Input
let arr = [1, 2, 3, 4, 5];
let n = arr.length;

// Function call
let result = leftRotate(arr, n);

// Output
console.log(result);
```

### Output

```text
[2, 3, 4, 5, 1]
```

---

##  How the Code Works

The important part of the solution is:

```javascript
let temp = arr[0];
```

This saves the first element before it gets overwritten.

Then:

```javascript
for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
}
```

The loop starts from index `1`.

For every iteration:

```text
arr[i - 1] = arr[i]
```

moves the current element one position to the left.

Finally:

```javascript
arr[n - 1] = temp;
```

puts the original first element at the last position.

So the overall transformation is:

```text
[1, 2, 3, 4, 5]
        ↓
[2, 3, 4, 5, 1]
```

---

##  Complexity

### Time Complexity

```text
O(n)
```

The loop traverses the array once.

### Space Complexity

```text
O(1)
```

Only one extra variable, `temp`, is used. The rotation is performed **in-place**.

---

##  Key Point to Remember

For **left rotation by one place**:

1. Store `arr[0]` in `temp`.
2. Shift elements from index `1` to `n - 1` one position left.
3. Put `temp` at index `n - 1`.

### Formula

```text
temp = arr[0]

arr[i - 1] = arr[i]    →    for i = 1 to n - 1

arr[n - 1] = temp
```

This is the standard **in-place approach** for left rotating an array by one position.
