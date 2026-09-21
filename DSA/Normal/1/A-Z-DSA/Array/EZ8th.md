


# Linear Search Algorithm

## 1. Problem Statement
Given an array of $n$ elements and a target element $d$, write a function to perform a **Linear Search** to find the target element in the array. 

If the target element $d$ is present in the array, return its index (0-based). If the target element is not found, return `-1`.

---

## 2. Logic Explanation
Linear Search is a straightforward **Brute Force** searching algorithm. The step-by-step logic works as follows:

1. **Iterate Through the Array:** Start from the very first element (index `0`) and run a loop up to the end of the array (index `n - 1`).
2. **Compare Elements:** In each iteration, compare the current array element `arr[i]` with the target element $d$.
3. **Return Index on Match:** If `arr[i] === d`, the element is found. Immediately return the current index `i`.
4. **Return -1 if Not Found:** If the loop finishes checking all $n$ elements without finding a match, return `-1` to indicate that the element does not exist in the array.

---

## 3. Input & Output Examples

### Example 1 (Element Found)
* **Input:**
  * `arr = [10, 23, 45, 70, 11, 15]` ($n = 6$)
  * Target Element $d = 70$
* **Output:**
  * `3` (since `70` is located at index 3)

### Example 2 (Element Not Found)
* **Input:**
  * `arr = [4, 8, 15, 16, 23, 42]` ($n = 6$)
  * Target Element $d = 99$
* **Output:**
  * `-1` (since `99` is not in the array)

---

## 4. JavaScript Code

```javascript
/**
 * Performs a Linear Search to find target element d in an array.
 * 
 * @param {number[]} arr - The array of n elements.
 * @param {number} d - The target element to search for.
 * @returns {number} - Index of the target element if found, otherwise -1.
 */
function linearSearch(arr, d) {
  const n = arr.length; // Length of the array

  // Loop through each element sequentially
  for (let i = 0; i < n; i++) {
    // Check if current element matches the target element 'd'
    if (arr[i] === d) {
      return i; // Target found, return index
    }
  }

  // Target 'd' was not found in the array
  return -1;
}

// --- Main Execution / Test ---
function main() {
  const arr = [10, 23, 45, 70, 11, 15];
  const d = 70;

  const result = linearSearch(arr, d);

  console.log("Array:", arr);
  console.log("Target Element (d):", d);

  if (result !== -1) {
    console.log(`Element ${d} found at index: ${result}`);
  } else {
    console.log(`Element ${d} not found in the array.`);
  }
}

main();

```

---

## 5. How the Code Works (Detailed Walkthrough)

1. **`const n = arr.length`**: Determines the total size ($n$) of the array so the loop knows when to stop.
2. **`for (let i = 0; i < n; i++)`**: Starts a standard `for` loop, moving sequentially from index `0` up to index `n - 1`.
3. **`if (arr[i] === d)`**: At each step, it checks if the value at the current position matches the target value `d`.
4. **Early Exit (`return i`)**: As soon as a match is detected, the function exits immediately and returns that index without checking the remaining elements.
5. **Fallback (`return -1`)**: If the loop runs through all $n$ positions without triggering the return inside the loop, execution reaches line 20 and returns `-1`.
6. **Complexity:**
* **Time Complexity:**
* **Best Case:** $\mathcal{O}(1)$ (if $d$ is at index 0).
* **Worst / Average Case:** $\mathcal{O}(n)$ (if $d$ is at the last index or not present at all).


* **Space Complexity:** $\mathcal{O}(1)$ auxiliary space because it only uses a loop pointer `i` without extra memory structures.



