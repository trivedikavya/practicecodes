



# Union of Two Arrays

## 1. Problem Statement
Given two arrays, write a function to find their **Union**. 

The **Union** of two arrays is defined as a collection containing all unique elements present in either of the arrays. The output should not contain any duplicate values.

---

## 2. Logic Explanation
To find the union of two arrays, we use the following step-by-step logic:

1. **Combine (Concatenate):** Merge all elements from both input arrays into a single combined collection using the JavaScript spread operator (`...`).
2. **Deduplicate (Set):** Pass the combined collection into a JavaScript `Set`. Since a `Set` only permits unique values, all duplicate numbers are automatically removed.
3. **Sort:** Convert the `Set` back into a standard array using `Array.from()` or spread syntax, and sort it in ascending numerical order using `.sort((a, b) => a - b)`.

---

## 3. Input & Output Examples

### Example 1 (Unsorted Inputs)
* **Input:**
  * `arr1 = [5, 1, 3, 1, 2, 4]`
  * `arr2 = [6, 4, 2, 3, 5, 4]`
* **Output:**
  * `[1, 2, 3, 4, 5, 6]`

### Example 2 (Sorted Inputs with Duplicates)
* **Input:**
  * `arr1 = [1, 1, 2, 3, 4, 5]`
  * `arr2 = [2, 3, 4, 4, 5, 6]`
* **Output:**
  * `[1, 2, 3, 4, 5, 6]`

---

## 4. JavaScript Code

```javascript
/**
 * Finds the sorted union of two arrays.
 * 
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The sorted union array containing unique elements.
 */
function findUnion(arr1, arr2) {
  // Step 1 & 2: Combine both arrays and filter duplicates using Set
  const uniqueElements = new Set([...arr1, ...arr2]);

  // Step 3: Convert Set back to an Array
  const unionArray = Array.from(uniqueElements);

  // Step 4: Sort the array in ascending numerical order
  unionArray.sort((a, b) => a - b);

  return unionArray;
}

// --- Main Execution / Test ---
function main() {
  const input1 = [1, 1, 2, 3, 4, 5];
  const input2 = [2, 3, 4, 4, 5, 6];

  const result = findUnion(input1, input2);

  console.log("Input Array 1:", input1);
  console.log("Input Array 2:", input2);
  console.log("Union Result:", result);
}

main();

```



## 5. How the Code Works (Detailed Walkthrough)

1. **`[...arr1, ...arr2]`**: The spread operator merges `arr1` and `arr2` into a single flat array containing all elements including duplicates (e.g., `[1, 1, 2, 3, 4, 5, 2, 3, 4, 4, 5, 6]`).
2. **`new Set(...)`**: Passing the merged array into `new Set()` filters out all repeating numbers, keeping only unique values (`Set { 1, 2, 3, 4, 5, 6 }`).
3. **`Array.from(...)`**: Converts the `Set` data structure back into a standard JavaScript array format so we can use array methods on it.
4. **`.sort((a, b) => a - b)`**: Sorts the numbers in ascending order. The callback `(a, b) => a - b` ensures numeric sorting instead of lexicographical (string) sorting.
5. **Complexity:**
* **Time Complexity:** $\mathcal{O}((N + M) \log(N + M))$, where $N$ and $M$ are the lengths of `arr1` and `arr2`. Adding to the set takes $\mathcal{O}(N + M)$ time, and sorting takes logarithmic time.
* **Space Complexity:** $\mathcal{O}(N + M)$ to store elements in the `Set` and final output array.

