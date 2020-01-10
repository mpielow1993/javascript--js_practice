/* Data Types:

1. undefined - a variable not defined or set to be anything yet
2. null - nothing (NOT the same as zero)
3. boolean - TRUE or FALSE
4. string - any sort of text
5. symbol -  an immutable primitive value that is unique
6. number - number
7. object - an entity that can store many key/value pairs (more on these later)

You are often going to set data into a variable.

A variable allows computers to store and manipulate data in a dynamic fashion.

Basically a label to reference the data.

Think of it like a 'box' (bear in mind the concept of 'boxing/unboxing').

You can declare any type of varaible with the 'var' keyword. Usually this is done with strings.

There are 3 ways to declare a variable in JS:

1 - 'let' keyword
2 - 'var' keyword
3 - 'const' keyword


DIFFERENCES between these declarations:

1 - 'var' is going to be able to be used throughout your whole program  (GLOBAL variable).
2 - 'let'  will only be used within the scope that the variable was declared in (LOCAL variable).
3 - 'const' is a variable that, when declared, can never change

*/

/* CHAPTER 2 - STORING VARIABLES WITH ASSIGNMENT OPERATOR 

There is a difference between declaring variables and assigning variables

ASSIGNING:

var a;

DECLARING:

var b = 2;

Think of the '=' as an 'assignment operator'. The above statement means that 'b' is being assigned to the number '2'.

Now we assign a value of '7' to the previously 'declared' variable 'a'

We can also assign:

b = a;

meaning that the contents of 'b' have been assigned to the value of the contents of 'a' (CHECK THIS IN 'practice.html' using 'console.log(a); - should equal 7')

*/

/* CHAPTER 3 - INITIALISING VARIABLES WITH ASSIGNMENT OPERATOR

We will now show an example of initialising a variable to an initial value at the same time it is declared:

var a = 9;

So the 'var a' is declaring it and the '= 9' is initialising it

*/

/* CHAPTER 4 - UNINITIALISED VARIABLES 

[GO_TO 'practice.html']

*/

/* CHAPTER 5 - CASE SENSITIVITY IN VARIABLES 

Variable names and function names in JS are case-sensitive

It is common practice to use camel-case

*/

//We can import this in our file 'practice2.html'
const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export { capitalizeString };

export const foo  = "bar";
export const bar = "foo";

