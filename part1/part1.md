# Part 1 Answers

## Part 1a

1. Line 9 prints `values added:  20`.
2. Line 13 prints `final result:  20`.
3. Line 9 prints `values added:  20`.
4. Line 13 returns an error, notably a `ReferenceError`. This is because `result` was defined in the if statement using a `let` statement, which only declares variables within a block's scope. `var` worked before because `var` is "hoisted" to the top of the function.
5. The code returns an error on line 4; this is because at this line, we attempt a reassignment to the `const` variable `result`, which is not allowed; none of the `console.log()` statements are allowed to print anything.
6. The code returns an error on line 4; this is because at this line, we attempt a reassignment to the `const` variable `result`, which is not allowed; none of the `console.log()` statements are allowed to print anything.

## Part 1b

1. At line 12, the code will print `3`. This is because the function successfuly iterates through the loop entirely, and `i` is declared as `var`, allowing it to be used anywhere in the function, so `i` will equal `prices.length` in the end.
2. At line 13, the code will print `150`. This is because the last discounted price is calculated last in our loop, but the `discountedPrice` variable is a `var`, so it's accessible anywhere in our function, including line 13.
3. At line 14, the code will print `150`. This is because, again, our final iteration of the `for` loop is preserved, so `finalPrice` will contain an approximation of the last `discountedPrice` instance, which was `150`, and since it is a `var` declaration, its scope is the function, so it can be accessed.
4. The function returns `[50, 100, 150]`. This is because the function applies a `discount` percentage reduction to each price passed into the `prices` array, and since the `discount` variable passed is `0.5`, each individual price in `prices` is reduced by 50%, or halved, which is the output we get.
5. At line 12, the code will cause a `ReferenceError`. This is because `i` is declared with a `let`, so it's only available in its block, or the `for` loop. Since the `console.log` is outside the `for` loop, `i` no longer exists, and as such is not defined.
6. At line 13, the code will cause a `ReferenceError`. This is because `discountedPrice` is declared with a `let`, so it's only available in the `for` loop, like `i`. Since the `console.log` is outside the `for` loop, `discountedPrice` no longer exists, and as such is not defined.
7. At line 14, the code will print `150`. In this case, `finalPrice` is declared with `let`, as well, but its scope is the function, so `console.log` being in the scope allows it to be accessed.
8. The function returns `[50, 100, 150]`. The function has the same behaviour as it does in question 4; it halves each number in the `prices` array.
9. At line 11, the code will cause a `ReferenceError`. This is because `i` is declared with a `let`, so it's only available in its block, or the `for` loop. Since the `console.log` is outside the `for` loop, `i` no longer exists, and as such is not defined.
10. At line 12, the code will print `3`. This is because `length` is defined as a `const` at the beginning of the function as the length of the array `[100, 200, 300]`, which is 3, and since the scope is the same, the variable exists and can be accessed.
11. The function returns `[50, 100, 150]`. The function has the same behaviour as it does in question 4; it halves each number in the `prices` array. The function maintains functionality because variable scopes are well-defined and functional.
12. Object notations are:
    - A: `student.name`
    - B: `student['Grad Year']`
    - C: `student.greeting()`
    - D: `student['Favorite Teacher'].name`
    - E: `student.courseLoad[0]`

13. Outputs are:
    - A: `'32'`; '2' maps to a string and it concatenates with '3' to make '32' as a string
    - B: `1`; '3' maps to the integer 3 and 2 is subtracted from it, to get the integer 1
    - C: `3`; `null` maps to 0 and is added to 3
    - D: `3null`; `null` maps to 'null' and is concatenated to '3'
    - E: `4`; `true` maps to 1 and is added to 3
    - F: `0`; `false` and `null` both map to 0 and are added together; they are not mapped to strings since `+` is by default a mathematical operation, not a string concatenation.
    - G: `3undefined`; `undefined` maps to its string representation and is concatenated to '3'
    - H: `NaN`; `undefined` maps to `NaN` as a number, '3' maps to `3` as a number, but subtracting `NaN` yields `NaN`

14. Comparison values are:
    - A: `true`; '2' is mapped to `2`, which is higher than 1
    - B: `false`; strings are lexicographically compared, which makes '2' higher ranked
    - C: `true`; '2' or `2` can map to each other's representation
    - D: `false`; while variables may be equal weakly, types do not match
    - E: `false`; `false` maps to 0, which is not equal to 2
    - F: `true`; `Boolean(2)` constructs a `true` boolean, which equal the type of `true`

15. The difference between `==` and `===` is that while `==` checks for value equality, `===` checks both for value equality and type equality.
16. File is `part1b-question16.js`.
17. The result of `modifyArray([1,2,3], doSomething)` will be `[2, 4, 6]`. This is because the initial modified function essentially takes each argument from the passed array and runs the callback function on them, modifying them and returning a different array. The `doSomething` callback simply doubles a number, so combining these two functions, we return an array that has the original numbers doubled.
18. File is `part1b-question18.js`.
19. Output is:

```js
1
4
3
2
```