# Recursion Practice

This repository contains practice exercises for recursion concepts, including implementations of the Fibonacci sequence and merge sort algorithms using both iterative and recursive approaches.

## Project Structure

```
recursion-practice/
├── fibonacci.js     # Fibonacci sequence implementation (iterative and recursive)
├── merge.js         # Merge sort algorithm using recursion
└── README.md        # Project documentation
```

## Installation & Usage

1. **Clone the repository:**
```bash
git clone git@github.com:mmustafa93/recursion-practice.git
cd recursion-practice
```

2. **Run the scripts:**
```bash
node fibonacci.js
node merge.js
```

## Files Overview

### `fibonacci.js`
Contains two functions to generate the Fibonacci sequence:
- **`fibs(num)`**: Iterative approach
- **`fibsRec(num)`**: Recursive approach

Example output for `fibs(8)` and `fibsRec(8)`:
```
[0, 1, 1, 2, 3, 5, 8, 13]
[0, 1, 1, 2, 3, 5, 8, 13]
```

### `merge.js`
Implements the **merge sort** algorithm using recursion:
- **`mergeSort(arr)`**: Recursively splits and merges arrays to sort them.

Example output for `mergeSort([105, 79, 100, 110])`:
```
[79, 100, 105, 110]
```

## Learning Outcomes
- Understanding recursion and iterative methods
- Implementing common algorithms with recursion
- Practicing divide-and-conquer strategies with merge sort

## License
This project is licensed under the MIT License.

