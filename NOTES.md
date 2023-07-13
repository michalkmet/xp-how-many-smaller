# Notes

Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Story 1 - User can pass in wrong input or empty array, it should return exception or empty array
 - ✅ UAT 1.1 - when given string, it should return exception
 - ✅ UAT 1.2 - when given empty array, it should return [0]
 - ✅ UAT 1.3 - when given integer, it should return exception

Story 2 - User can pass in 1 number, it should return [0]
 - ✅ UAT 2.1 - when given [1], it should return [0]
 - ✅ UAT 2.2 - when given [0], it should return [0]
 - ✅ UAT 2.3 - when given [10], it should return [0]

Story 3 - User can pass in 2 same numbers
 - ✅ UAT 3.1 - when given [0,0], it should return [0,0]
 - ✅ UAT 3.2 - when given [1,1], it should return [0,0]
 - ✅ UAT 3.3 - when given [2,2], it should return [0,0]