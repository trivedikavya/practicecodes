
# Find the Single Number

## 1. Problem Statement
Given an array of integers where every element appears exactly twice except for one element which appears only once, find that single number.

---

## 2. Logic Explanation
While a **Brute Force** approach involves nested loops to count occurrences of each number, we can solve this optimally in a single pass using the **XOR (`^`)** operator.

**The XOR Magic Rules:**
1. `0 ^ N = N` (Zero XORed with any number is just the number).
2. `N ^ N = 0` (Any number XORed with itself cancels out to zero).

**Step-by-Step Execution:**
1. Create a variable `result` initialized to `0`.
2. Run a single loop through the array.
3. Apply the XOR operator (`^=`) against every number.
4. All pairs (the couples) will cancel each other out to `0`.
5. The only number left in `result` at the end of the loop will be the single number!

---

## 3. Input & Output Examples

### Example 1
* **Input:**
  * `arr = [2, 2, 1]`
* **Output:**
  * `1`

### Example 2
* **Input:**
  * `arr = [4, 1, 2, 1, 2]`
* **Output:**
  * `4` (The `1`s cancel out, the `2`s cancel out, leaving `4`).

---

## 4. JavaScript Code

```javascript
/**
 * Finds the single number in an array where every other number appears twice.
 * 
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The single number.
 */
function findSingleNumber(arr) {
  let result = 0;

  // Single pass through the array
  for (let i = 0; i < arr.length; i++) {
    // XOR the current number with the result
    result = result ^ arr[i]; 
  }

  return result;
}

// --- Main Execution / Test ---
function main() {
  const arr = [4, 1, 2, 1, 2, 5, 5];
  
  const singleNumber = findSingleNumber(arr);

  console.log("Given Array:", arr);
  console.log("The Single Number is:", singleNumber);
}

main();

```

---

## 5. How the Code Works (Detailed Walkthrough)

1. **Initialization:** We start with `result = 0`.
2. **Looping through `[4, 1, 2, 1, 2]`:**
* **i = 0 (val = 4):** `result = 0 ^ 4`  $\rightarrow$ `result` is now `4`.
* **i = 1 (val = 1):** `result = 4 ^ 1`  $\rightarrow$ `result` holds `4 ^ 1`.
* **i = 2 (val = 2):** `result = 4 ^ 1 ^ 2` $\rightarrow$ `result` holds all three.
* **i = 3 (val = 1):** `result = (4 ^ 1 ^ 2) ^ 1`. The two `1`s cancel out to `0`. `result` is now `4 ^ 2`.
* **i = 4 (val = 2):** `result = (4 ^ 2) ^ 2`. The two `2`s cancel out to `0`. `result` is now just `4`.


3. **Return:** The loop ends, and the function returns `4`.
4. **Complexity:**
* **Time Complexity:** $\mathcal{O}(N)$, as it only requires one single traversal of the array.
* **Space Complexity:** $\mathcal{O}(1)$, because it only uses a single integer variable (`result`) to store the ongoing calculation, no matter how large the array gets.


