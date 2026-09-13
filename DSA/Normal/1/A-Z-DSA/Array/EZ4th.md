# Remove Duplicates from a Sorted Array

## Problem Statement

Given a **sorted array**, remove the duplicate elements so that each element appears only once.

The order of the elements must remain the same.

### Example

Given the array:

```javascript
[1, 1, 2, 2, 3, 3]
```

After removing duplicates:

```javascript
[1, 2, 3]
```

---

## Understanding the Problem

Because the array is sorted, duplicate elements always appear **next to each other**.

For example:

```javascript
[1, 1, 2, 2, 3, 3]
```

Here:

* `1` appears twice.
* `2` appears twice.
* `3` appears twice.

We need to keep only one occurrence of each number.

The final array should be:

```javascript
[1, 2, 3]
```

The question is not asking us to find duplicate values. It is asking us to **remove the repeated values and keep only the unique elements**.

---

## 1. Brute Force / Simple Approach — Using Set

### Idea

The easiest way to remove duplicates in JavaScript is to use a **Set**.

A `Set` is a data structure that stores only **unique values**.

If we insert duplicate values into a Set, it automatically keeps only one occurrence of each value.

### Example

Suppose the array is:

```javascript
[1, 1, 2, 2, 3, 3]
```

We pass this array into a Set:

```javascript
new Set([1, 1, 2, 2, 3, 3])
```

The Set stores:

```text
1, 2, 3
```

To convert the Set back into an array, we use the spread operator:

```javascript
[...new Set(arr)]
```

This gives us:

```javascript
[1, 2, 3]
```

### Why Is This Called a Brute Force / Simple Approach?

This approach uses an additional data structure, the Set, to store the unique elements.

It is simple because JavaScript handles the duplicate-checking internally.

We do not manually compare every element with the previous one.

---

## JavaScript Code — Brute Force Approach

```javascript
function removeDuplicates(arr) {
  // Convert the array into a Set to remove duplicates
  const uniqueElements = new Set(arr);

  // Convert the Set back into an array
  return [...uniqueElements];
}

// Example
const arr = [1, 1, 2, 2, 3, 3];

console.log(removeDuplicates(arr));
```

---

## Output

```text
[1, 2, 3]
```

---

## How the Code Works

Consider:

```javascript
const arr = [1, 1, 2, 2, 3, 3];
```

### Step 1: Create a Set

```javascript
const uniqueElements = new Set(arr);
```

The Set removes duplicate values automatically.

The Set now contains:

```text
{1, 2, 3}
```

### Step 2: Convert the Set Back to an Array

```javascript
return [...uniqueElements];
```

The spread operator takes the values from the Set and creates a new array.

The returned array is:

```javascript
[1, 2, 3]
```

### Complete Flow

```text
Original Array
[1, 1, 2, 2, 3, 3]
        ↓
      Set
   {1, 2, 3}
        ↓
Convert Set to Array
    [1, 2, 3]
```

---

## 2. Optimized Approach — Two Pointers

### Idea

Since the array is already sorted, we do not need an extra Set.

We can remove duplicates **in place** using two pointers:

* `i` → Points to the position of the last unique element.
* `j` → Traverses the array to find the next unique element.

### Example

```javascript
[1, 1, 2, 2, 3, 3]
```

Initially:

```text
i = 0
j = 1
```

The first element is always unique, so we keep `1`.

### Step-by-Step Working

| Step | `i` | `j` | Comparison | Action              |
| ---- | --: | --: | ---------- | ------------------- |
| 1    | `0` | `1` | `1 === 1`  | Duplicate, move `j` |
| 2    | `0` | `2` | `1 !== 2`  | Move `i`, place `2` |
| 3    | `1` | `3` | `2 === 2`  | Duplicate, move `j` |
| 4    | `1` | `4` | `2 !== 3`  | Move `i`, place `3` |
| 5    | `2` | `5` | `3 === 3`  | Duplicate, move `j` |

At the end:

```javascript
[1, 2, 3, 2, 3, 3]
```

The first `i + 1` elements are the unique elements:

```javascript
[1, 2, 3]
```

The remaining elements are not relevant.

### How the Two Pointers Work

1. Start `i` at `0`.
2. Start `j` at `1`.
3. Compare `arr[i]` and `arr[j]`.
4. If they are equal, `j` moves forward because it is a duplicate.
5. If they are different:

   * Move `i` forward.
   * Copy `arr[j]` into `arr[i]`.
6. Continue until `j` reaches the end.

### Why Does This Work?

Because the array is sorted:

* Equal elements are duplicates.
* A different element is the next unique value.

Therefore, we only need to compare the current unique element with the next element being examined.

### Complexity

* **Time Complexity:** \(O(n)\)
* **Space Complexity:** \(O(1)\) auxiliary space

The array is modified in place, and no extra Set or array is required.

---

## Comparison of Both Approaches

| Approach                 | Main Idea                                      | Time Complexity | Space Complexity |
| ------------------------ | ---------------------------------------------- | --------------- | ---------------- |
| **Brute Force / Simple** | Use Set to remove duplicates                   | \(O(n)\)        | \(O(n)\)         |
| **Optimized**            | Use two pointers and modify the array in place | \(O(n)\)        | \(O(1)\)         |

---

## Important Note

This problem specifically assumes that the array is **sorted**.

For example:

```javascript
[1, 1, 2, 2, 3, 3]
```

is sorted, so duplicates are adjacent.

But in an unsorted array:

```javascript
[3, 1, 2, 1, 3]
```

duplicates are not necessarily next to each other. The two-pointer approach described above would not work correctly without sorting first.

---

## Conclusion

The Set approach is the easiest way to remove duplicates because JavaScript automatically stores only unique values.

The two-pointer approach is more efficient in terms of extra space because it uses the sorted nature of the array and modifies it in place.

**Key takeaway:** When an array is sorted, duplicate values are adjacent, making it possible to remove duplicates efficiently using two pointers.
