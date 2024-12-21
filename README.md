# Unexpected String Concatenation in JavaScript Addition
This repository demonstrates a common JavaScript bug caused by type coercion during addition.  The `foo` function intends to perform numerical addition, but due to the implicit type conversion of JavaScript, it performs string concatenation when one of the operands is a string.

## Bug
The provided JavaScript code showcases an unexpected behavior when adding a number and a string. Instead of the expected numerical sum, the code concatenates the operands as strings.

## Solution
The solution involves explicit type conversion to ensure that both operands are numbers before performing the addition. This avoids the implicit type coercion that leads to the unexpected behavior.