
# Maximum Consecutive Ones

## 1. Problem Statement
Given a binary array (an array containing only `0`s and `1`s), find the maximum number of consecutive `1`s in the array.

---

## 2. Logic Explanation
This problem can be solved optimally in a single pass using a straightforward counting logic. We need two variables:
* **`currentCount`**: Tracks the ongoing streak of `1`s.
* **`maxCount`**: Stores the highest streak we have seen so far.

**Step-by-Step Execution:**
1. Iterate through the array using a single `for` loop.
2. If the current element is a `1`, increase the `currentCount` by `1`. Immediately compare it with `maxCount` to see if we have hit a new record.
3. If the current element is a `0`, the streak is broken. Reset the `currentCount` back to `0`.
4. At the end of the loop, `maxCount` will hold the highest number of consecutive `1`s.

---

## 3. Input & Output Examples

### Example 1
* **Input:**
  * `arr = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1]`
* **Output:**
  * `4` (The longest streak of `1`s is four in a row).

### Example 2
* **Input:**
  * `arr = [1, 0, 1, 1, 0, 1]`
* **Output:**
  * `2`

---

## 4. JavaScript Code

```javascript
/**
 * Finds the maximum number of consecutive 1s in a binary array.
 * 
 * @param {number[]} arr - The binary array.
 * @returns {number} - The maximum consecutive 1s.
 */
function findMaxConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // Streak continues: increment current count
      currentCount++;
      // Update maxCount if currentCount is greater
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      // Streak broken by a 0: reset current count
      currentCount = 0;
    }
  }

  return maxCount;
}

// --- Main Execution / Test ---
function main() {
  const arr = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1];
  const maxOnes = findMaxConsecutiveOnes(arr);

  console.log("Binary Array:", arr);
  console.log("Maximum Consecutive Ones:", maxOnes);
}

main();

```


## 5. How the Code Works (Detailed Walkthrough)

1. **Initialization:** We start with `maxCount = 0` and `currentCount = 0`.
2. **First loop (index 0 & 1):** The code sees `1`s. `currentCount` becomes `1`, then `2`. `maxCount` also updates to `2`.
3. **Encountering a Zero (index 2):** The code sees a `0`. The `else` block triggers, resetting `currentCount` to `0`. `maxCount` safely remains `2`.
4. **Building a New Streak (index 3 to 6):** The code sees four `1`s in a row. `currentCount` goes `1 -> 2 -> 3 -> 4`. As it grows, `maxCount` is updated to `4`.
5. **Complexity:**
* **Time Complexity:** $\mathcal{O}(N)$, where $N$ is the number of elements in the array. We only loop through the array exactly one time.
* **Space Complexity:** $\mathcal{O}(1)$. No extra arrays or data structures are created; we only use two integer variables. This is the most memory-efficient approach possible.


