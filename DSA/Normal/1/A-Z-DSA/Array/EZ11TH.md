
## 1. Problem Statement
Given an array containing distinct numbers taken from the range `1` to `N` (where `N` represents the total total numbers including the missing one), find the missing number from the sequence.

---

## 2. Logic Explanation
To find the missing number using a **Brute Force** approach, we use the following step-by-step logic:

1. **Outer Loop (Expected Numbers):** Run an outer loop `i` from `1` up to `N`. This loop represents every expected number that *should* be in the array.
2. **Inner Loop (Array Search):** For each expected number `i`, run an inner loop through the given array to check if `i` exists inside the array.
3. **Flag Checking:** Use a boolean flag (`found`) initialized to `false`. If `arr[j] === i` during the inner loop, set `found = true` and break out of the inner loop.
4. **Identify Missing Number:** After the inner loop finishes, if `found` is still `false`, it means the expected number `i` was not present in the array. Return `i` as the missing number.

---

## 3. Input & Output Examples

### Example 1
* **Input:**
  * `arr = [1, 2, 4, 5]`
  * `N = 5`
* **Output:**
  * Missing Number: `3`

### Example 2
* **Input:**
  * `arr = [1, 3, 4, 5, 6, 7, 8]`
  * `N = 8`
* **Output:**
  * Missing Number: `2`

---

## 4. JavaScript Code

```javascript
/**
 * Finds the missing number in an array ranging from 1 to N using Brute Force.
 * 
 * @param {number[]} arr - The given array of numbers.
 * @param {number} N - The total expected range limit (1 to N).
 * @returns {number} - The missing number, or -1 if no number is missing.
 */
function findMissingNumberBruteForce(arr, N) {
  // Outer loop: Check every number from 1 to N
  for (let i = 1; i <= N; i++) {
    let found = false;

    // Inner loop: Search for number 'i' in the array
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true; // Number 'i' is present
        break;        // Stop searching for 'i' and move to next number
      }
    }

    // If 'i' was not found in the array, it is the missing number
    if (!found) {
      return i;
    }
  }

  return -1; // If all numbers from 1 to N are present
}

// --- Main Execution / Test ---
function main() {
  const arr = [1, 2, 4, 5]; // 3 is missing
  const N = 5;

  const missingNumber = findMissingNumberBruteForce(arr, N);

  console.log("Given Array:", arr);
  console.log("Expected Range N:", N);
  console.log("Missing Number:", missingNumber);
}

main();

```

---

## 5. How the Code Works (Detailed Walkthrough)

1. **Outer Loop (`i = 1` to `N`):**
* When `i = 1`, the inner loop scans the array `[1, 2, 4, 5]`. It finds `1` at index `0`, sets `found = true`, and moves on.
* When `i = 2`, the inner loop scans and finds `2` at index `1`, sets `found = true`, and moves on.
* When `i = 3`, the inner loop scans the entire array `[1, 2, 4, 5]`. It never finds `3`, so `found` stays `false`.


2. **Missing Number Found:** Because `found` remains `false` after checking all elements for `i = 3`, `if (!found)` triggers and immediately returns `3`.
3. **Complexity:**
* **Time Complexity:** $\mathcal{O}(N \times M)$ (where $N$ is the expected range and $M$ is the size of the given array). In the worst case, checking every expected number against the array takes quadratic time.
* **Space Complexity:** $\mathcal{O}(1)$ auxiliary space because we only use two loop counters (`i`, `j`) and a single boolean variable (`found`).

