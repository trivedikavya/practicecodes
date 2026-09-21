

# Intersection of Two Arrays (Brute Force Approach)

## 1. Problem Statement
Given two arrays of potentially different sizes, write a function to find the count and elements of their **Intersection**.

The **Intersection** of two arrays is defined as the set of unique elements that are present in **both** arrays.

---

## 2. Logic Explanation
To find the intersection using a **Brute Force** approach, we use the following step-by-step logic:

1. **Iterate with Nested Loops:** Use an outer loop to iterate through every element of `arr1` and an inner loop to check if that element exists in `arr2`.
2. **Collect Matching Elements:** When a match is found (`arr1[i] === arr2[j]`), record the element into a temporary `matches` array and break out of the inner loop to move to the next item in `arr1`.
3. **Remove Duplicates:** Pass the `matches` array into a JavaScript `Set` to remove duplicate occurrences (e.g., if an element appears multiple times in either array).
4. **Return Count & Result:** Convert the `Set` back into an array to get the unique intersecting values and its length for the count.

---

## 3. Input & Output Examples

### Example 1 (Different Array Sizes)
* **Input:**
  * `arr1 = [1, 1, 2, 3, 4, 5]` (Size: 6)
  * `arr2 = [2, 3, 4, 4, 5, 6]` (Size: 6)
* **Output:**
  * Intersecting Elements: `[2, 3, 4, 5]`
  * Total Count: `4`

### Example 2 (Unsorted Arrays of Varying Sizes)
* **Input:**
  * `arr1 = [10, 20, 20, 30, 40, 50, 60]` (Size: 7)
  * `arr2 = [15, 20, 25, 30, 30, 40, 50, 70]` (Size: 8)
* **Output:**
  * Intersecting Elements: `[20, 30, 40, 50]`
  * Total Count: `4`

---

## 4. JavaScript Code

```javascript
/**
 * Finds the intersection of two arrays using the Brute Force approach.
 * 
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {object} - Contains the count and the unique intersecting elements array.
 */
function findIntersectionBruteForce(arr1, arr2) {
  const matches = [];

  // Step 1: Compare each element of arr1 with every element of arr2
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // Check if elements are equal
      if (arr1[i] === arr2[j]) {
        matches.push(arr1[i]); // Push matching element
        break; // Match found for arr1[i], stop inner loop
      }
    }
  }

  // Step 2: Filter out duplicates using Set
  const uniqueIntersection = Array.from(new Set(matches));

  // Step 3: Return the result object
  return {
    count: uniqueIntersection.length,
    elements: uniqueIntersection
  };
}

// --- Main Execution / Test ---
function main() {
  const arr1 = [1, 1, 2, 3, 4, 5];
  const arr2 = [2, 3, 4, 4, 5, 6];

  const result = findIntersectionBruteForce(arr1, arr2);

  console.log("Input Array 1:", arr1);
  console.log("Input Array 2:", arr2);
  console.log("Intersecting Elements:", result.elements);
  console.log("Total Count of Intersecting Elements:", result.count);
}

main();

```

---

## 5. How the Code Works (Detailed Walkthrough)

1. **Nested For Loops:**
* The outer loop (`i`) runs `arr1.length` times.
* The inner loop (`j`) runs `arr2.length` times for every single iteration of the outer loop.


2. **`if (arr1[i] === arr2[j])`**: Checks if the value at index `i` in `arr1` is equal to the value at index `j` in `arr2`.
3. **`break` Statement:** Once a match for `arr1[i]` is found in `arr2`, the inner loop breaks immediately to avoid redundant comparisons and prevent unnecessary duplicate entries from the same `arr1[i]` element.
4. **`new Set(matches)`**: Consolidates all raw matches into a `Set` to strip out duplicates. For example, duplicate numbers like `1` or `4` occurring multiple times are reduced down to a single unique value.
5. **`Array.from(...)` & `.length**`: Converts the unique set back into a standard array to read its `.length`, which yields the final count of intersecting numbers.
6. **Complexity:**
* **Time Complexity:** $\mathcal{O}(N \times M)$, where $N$ is the length of `arr1` and $M$ is the length of `arr2`, due to the nested comparison loops.
* **Space Complexity:** $\mathcal{O}(\min(N, M))$ to hold the matched items in memory.





```
