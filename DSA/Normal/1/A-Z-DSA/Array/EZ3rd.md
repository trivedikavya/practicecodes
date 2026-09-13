# Check Whether an Array Is Sorted

## Problem Statement

Given an array of numbers, determine whether the array is sorted in **non-decreasing order**.

An array is sorted in non-decreasing order when every element is **greater than or equal to** the element before it.

### Example

Given the array:

```javascript
[1, 2, 2, 3, 3, 4, 5]
```

The array is sorted because every element is greater than or equal to the previous element.

**Output:**

```text
true
```

---

## Understanding the Problem

To check whether an array is sorted, we do not need to sort it again.

Instead, we compare **each element with the next element**.

For every adjacent pair, we ask:

> **Is the current element greater than or equal to the next element?**

If the current element is greater than the next element, the array is **not sorted**.

If no such pair is found, the array is sorted.

### Example

```javascript
[1, 2, 2, 3, 3, 4, 5]
```

We compare:

```text
1 <= 2  → true
2 <= 2  → true
2 <= 3  → true
3 <= 3  → true
3 <= 4  → true
4 <= 5  → true
```

Since every comparison is valid, the array is sorted.

### Example of an Unsorted Array

```javascript
[1, 2, 4, 3, 5]
```

Comparisons:

```text
1 <= 2  → true
2 <= 4  → true
4 <= 3  → false
```

As soon as `4 > 3`, we know the array is not sorted.

Therefore, we can immediately return `false`.

---

## Simple / Brute Force Approach

### Idea

The simple approach is to traverse the array using a `for` loop and compare every element with the next element.

We start from the first element and continue until the second-last element.

Why the second-last element?

Because the last element does not have a next element to compare with.

### Algorithm

1. Start a loop from index `0`.
2. Compare the current element with the next element.
3. If the current element is greater than the next element, return `false`.
4. Continue checking all adjacent elements.
5. If the loop finishes without finding any invalid pair, return `true`.

### Condition

```javascript
arr[i] > arr[i + 1]
```

If this condition is true, the array is not sorted.

### Why Do We Allow Equal Values?

Because the question asks whether the array is sorted in **non-decreasing order**.

That means:

```text
1 <= 2  → valid
2 <= 2  → valid
3 <= 3  → valid
```

Equal elements are allowed.

---

## JavaScript Code

```javascript
function isSorted(arr) {
  // Traverse the array
  for (let i = 0; i < arr.length - 1; i++) {
    // If the current element is greater than the next element,
    // the array is not sorted
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  // If no invalid pair is found, the array is sorted
  return true;
}

// Example
const arr = [1, 2, 2, 3, 3, 4, 5];

console.log(isSorted(arr));
```

---

## Output

```text
true
```

---

## How the Code Runs

Consider:

```javascript
const arr = [1, 2, 2, 3, 3, 4, 5];
```

The loop checks the following pairs:

| Current Element | Next Element | Condition `arr[i] > arr[i + 1]` | Result   |
| --------------: | -----------: | ------------------------------- | -------- |
|             `1` |          `2` | `1 > 2` → false                 | Continue |
|             `2` |          `2` | `2 > 2` → false                 | Continue |
|             `2` |          `3` | `2 > 3` → false                 | Continue |
|             `3` |          `3` | `3 > 3` → false                 | Continue |
|             `3` |          `4` | `3 > 4` → false                 | Continue |
|             `4` |          `5` | `4 > 5` → false                 | Continue |

The loop finishes, so the function returns:

```javascript
true
```

### Unsorted Example

```javascript
const arr = [1, 2, 4, 3, 5];
```

When the loop reaches:

```javascript
4 > 3
```

The condition becomes true, so the function immediately returns:

```javascript
false
```

There is no need to check the remaining elements.

---

## Input and Output

| Input                   | Output  |
| ----------------------- | ------- |
| `[1, 2, 2, 3, 3, 4, 5]` | `true`  |
| `[1, 2, 4, 3, 5]`       | `false` |
| `[5, 4, 3, 2, 1]`       | `false` |
| `[1, 1, 1, 1]`          | `true`  |
| `[-5, -3, -3, 0, 2]`    | `true`  |
| `[-1, -2, -3]`          | `false` |

---

## Complexity

* **Time Complexity:** \(O(n)\)
* **Space Complexity:** \(O(1)\)

### Why?

We traverse the array only once.

In the worst case, we compare every adjacent pair, which takes \(n - 1\) comparisons.

We use only the loop variable and do not create another array, so the extra space is constant.

---

## Important Note

This solution checks whether the array is sorted in **ascending order with duplicates allowed**.

That means:

```javascript
[1, 2, 2, 3, 4]
```

is sorted.

But:

```javascript
[1, 2, 2, 3, 2]
```

is not sorted because `3 > 2`.

If the question instead asks for a **strictly increasing array**, then equal values would not be allowed. In that case, the condition would be:

```javascript
arr[i] >= arr[i + 1]
```

But for this question, we use:

```javascript
arr[i] > arr[i + 1]
```

---

## Conclusion

To check whether an array is sorted, compare every element with the next element.

* If any current element is greater than the next element, return `false`.
* If the entire loop finishes without finding such a pair, return `true`.

**Key takeaway:** You do not need to sort the array to check whether it is already sorted. A single traversal is enough.
