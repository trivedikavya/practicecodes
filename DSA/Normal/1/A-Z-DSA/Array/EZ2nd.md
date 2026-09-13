# Find the Second Largest Number in an Array

## Problem Statement

Given an array of numbers, find the **second largest distinct number** in the array.

The array may contain duplicate values. If the largest number appears more than once, it should still be counted only once.

### Example

Given the array:

```javascript
[1, 2, 4, 7, 7, 5]
```

The largest number is `7`, and the second largest **distinct** number is `5`.

**Output:**

```text
5
```

---

## Understanding the Problem

There are three ways to approach this problem:

1. **Brute Force Approach:** Sort the array and find the second distinct largest number.
2. **Better Approach:** Sort the array, then traverse it in reverse and compare each number with the largest number.
3. **Optimal Approach:** Traverse the array only once using two variables: `largest` and `secondLargest`.

In this README, we will write the code only for the **Brute Force Approach**. The other two approaches will be explained conceptually.

---

## 1. Brute Force Approach

### Idea

The simplest way to solve this problem is:

1. Sort the array in ascending order.
2. The last element will be the largest number.
3. Traverse the array from the end.
4. Find the first number that is **different from the largest number**.
5. That number will be the second largest distinct number.

### Why do we compare with the largest number?

Consider:

```javascript
[1, 2, 4, 7, 7, 5]
```

After sorting:

```javascript
[1, 2, 4, 5, 7, 7]
```

The last element is `7`, which is the largest number.

The element before it is also `7`. Since both are equal, we cannot consider `7` as the second largest **distinct** number.

We continue moving backward until we find a number different from `7`.

That number is `5`.

### Algorithm

1. Sort the array in ascending order.
2. Store the last element as `largest`.
3. Start traversing from the second-last element.
4. If the current element is different from `largest`, return it.
5. If no different element is found, return `null`.

### JavaScript Code

```javascript
function findSecondLargest(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // The last element is the largest
  const largest = arr[arr.length - 1];

  // Traverse from the second-last element
  for (let i = arr.length - 2; i >= 0; i--) {
    // Find the first number different from the largest
    if (arr[i] !== largest) {
      return arr[i];
    }
  }

  // No second distinct largest number exists
  return null;
}

// Example
const arr = [1, 2, 4, 7, 7, 5];

console.log(findSecondLargest(arr));
```

### Output

```text
5
```

---

## Input and Output

| Input                | Output |
| -------------------- | ------ |
| `[1, 2, 4, 7, 7, 5]` | `5`    |
| `[10, 20, 30, 40]`   | `30`   |
| `[5, 5, 5, 5]`       | `null` |
| `[7, 7, 5, 5, 3]`    | `5`    |
| `[-10, -5, -2, -8]`  | `-5`   |

### Example 1

**Input:**

```javascript
[1, 2, 4, 7, 7, 5]
```

**Sorted Array:**

```javascript
[1, 2, 4, 5, 7, 7]
```

**Largest:** `7`

**Second Largest:** `5`

**Output:**

```text
5
```

### Example 2: Duplicate Largest Number

**Input:**

```javascript
[10, 20, 30, 30, 40]
```

**Sorted Array:**

```javascript
[10, 20, 30, 30, 40]
```

**Largest:** `40`

**Second Largest:** `30`

**Output:**

```text
30
```

### Example 3: All Elements Are Equal

**Input:**

```javascript
[5, 5, 5, 5]
```

There is no second distinct largest number.

**Output:**

```text
null
```

---

## 2. Better Approach

### Idea

The better approach still uses sorting, but instead of repeatedly checking the last two elements, we:

1. Sort the array in ascending order.
2. Store the largest number.
3. Traverse the array from the end.
4. Compare every number with the largest number.
5. The first number that is different from the largest is the second largest distinct number.

### Example

```javascript
[1, 2, 4, 5, 7, 7]
```

* Largest number = `7`
* Start from the second-last element.
* Compare `7` with `7` → Equal, so skip it.
* Compare `5` with `7` → Different, so `5` is the second largest.

### Difference from Brute Force

The brute-force approach generally checks the last two positions and then adjusts for duplicates.

The better approach explicitly searches backward for the first value different from the largest.

However, **both approaches still require sorting**, so their time complexity remains dominated by sorting.

### Complexity

* **Time Complexity:** \(O(n \log n)\)
* **Space Complexity:** \(O(1)\) auxiliary space, excluding the sorting implementation.

> **Note:** JavaScript's `sort()` may use additional internal memory depending on the engine.

---

## 3. Optimal Approach

### Idea

The optimal approach does not sort the array.

Instead, we maintain two variables:

* `largest` → Stores the largest number found so far.
* `secondLargest` → Stores the second largest distinct number found so far.

We traverse the array only once.

### How It Works

Consider:

```javascript
[1, 2, 4, 7, 7, 5]
```

Initially, we have no largest or second largest number.

We process each element one by one.

### Step-by-Step Explanation

| Current Number | Largest | Second Largest | Explanation                                                             |
| -------------- | ------: | -------------: | ----------------------------------------------------------------------- |
| `1`            |     `1` |              — | First number becomes the largest.                                       |
| `2`            |     `2` |            `1` | `2` is greater than `1`, so `1` becomes second largest.                 |
| `4`            |     `4` |            `2` | `4` is greater than `2`, so `2` becomes second largest.                 |
| `7`            |     `7` |            `4` | `7` is greater than `4`, so `4` becomes second largest.                 |
| `7`            |     `7` |            `4` | Duplicate of largest, so ignore it.                                     |
| `5`            |     `7` |            `5` | `5` is smaller than `7` but greater than `4`, so update second largest. |

### Important Conditions

For every number, we ask:

1. **Is the current number greater than `largest`?**

   * If yes, the current number becomes the new largest.
   * The previous largest becomes the second largest.

2. **Otherwise, is the current number smaller than `largest` but greater than `secondLargest`?**

   * If yes, update `secondLargest`.

3. **Is the current number equal to `largest`?**

   * If yes, ignore it because we need the second **distinct** largest number.

### Why Is This Optimal?

We do not need to sort the array.

We only compare each number with the two values we have stored.

Therefore:

* Each element is visited once.
* No sorting is required.
* The algorithm uses constant extra space.

### Complexity

* **Time Complexity:** \(O(n)\)
* **Space Complexity:** \(O(1)\)

### Code Status

The optimal approach is explained here conceptually. Its code is intentionally not included in this README.

---

## Comparison of All Approaches

| Approach        | Main Idea                                         | Time Complexity | Space Complexity |
| --------------- | ------------------------------------------------- | --------------- | ---------------- |
| **Brute Force** | Sort and find the second distinct largest         | \(O(n \log n)\) | \(O(1)\)*        |
| **Better**      | Sort, then traverse backward and compare          | \(O(n \log n)\) | \(O(1)\)*        |
| **Optimal**     | One traversal using `largest` and `secondLargest` | \(O(n)\)        | \(O(1)\)         |

*Auxiliary space, excluding internal sorting memory.

---

## Edge Cases to Consider

A good solution should handle the following cases:

* **Array with duplicate largest values**

  ```javascript
  [1, 2, 7, 7, 5]
  ```

  Output: `5`

* **Array with all equal values**

  ```javascript
  [5, 5, 5]
  ```

  Output: `null`

* **Array containing negative numbers**

  ```javascript
  [-10, -5, -2, -8]
  ```

  Output: `-5`

* **Array containing only two distinct values**

  ```javascript
  [10, 10, 5, 5]
  ```

  Output: `5`

* **Array with only one distinct value**

  ```javascript
  [7, 7, 7]
  ```

  Output: `null`

---

## Conclusion

The brute-force approach is easy to understand and implement because sorting gives us an ordered array.

The better approach improves the way we search for the second distinct largest number after sorting.

The optimal approach is the most efficient because it avoids sorting entirely and finds the answer in a single traversal using two variables.

**Key takeaway:** When a problem asks for the largest and second largest values, try to maintain the top two values while traversing the array instead of sorting it.
