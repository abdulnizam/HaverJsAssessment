
Harver JS Assessment
============================

This is the assesment work has been given by Haver.com. Here the full document about the assesment work with the results.


## Get started

Set this repository up by running:

```
cd /path/to/harver-js-test
npm install
```

Edit your code in `src/index.js` and run `npm start` to run the code.

The tasks in this assessment use the included package `word-maker` which can be found in the directory
`./word-maker`. This directory also contains a *README.md* with details about its usage and API. The module
is already *required* for you in `src/index.js`


1) Print numbers from 1 to 100 to the console, but for each number also print a random word using the function getRandomWordSync.

# console result

Number 1
1: dried
2: pack
3: mysterious
4: disease
...
99: coffee
100: score

2) Modify your code to be a "Fizz Buzz" program. That is, print the numbers as in the previous step, but for multiples of three, print "Fizz" (instead of the random word), for multiples of five, print "Buzz" and for numbers which are both multiples of three and five, print "FizzBuzz".

# console result

Number 2
1: ruler
2: save
3: Fizz
4: such
5: Buzz
6: Fizz
7: snake
8: needs
9: Fizz
10: Buzz
11: one
12: Fizz
13: why
14: substance
15: FizzBuzz
...
98: daughter
99: Fizz
100: Buzz

3) Create a version of steps 1 and 2 using the asynchronous function, getRandomWord. This function returns a Promise, which resolves to a random word string. The numbers may or may not be in numerical order.

3A. asynchronous step 1

# console result

Number 3A
101: hold
101: care
101: sale
101: cool
101: eat
101: copy
101: friend
101: bell
101: seen
...
101: company
101: late
101: fresh
101: everyone
101: organized
101: exercise
101: fifteen
101: arrow
101: imagine
101: hello
101: forest

3B. asynchronous step 2

# console result

Number 3B
3: Fizz
5: Buzz
6: Fizz
9: Fizz
10: Buzz
12: Fizz
15: FizzBuzz
18: Fizz
20: Buzz
21: Fizz
24: Fizz
25: Buzz
 ...
101: last
101: might
101: dangerous
101: shake
101: direct
101: dress
101: ranch
101: compass
101: cry
101: seen
101: power
101: declared
101: pictured
101: start
101: brought
101: avoid
101: movement
101: reader
101: valley
101: principal
101: basket
101: without
101: women
101: consider

4) Add error handling to both the synchronous and asynchronous solutions (calling getRandomWord({ withErrors: true }) will intermitently throw an error instead of return a random word). When an error is caught, the programm should print "Doh!" instead of the random word, "Fizz", "Buzz" or "FizzBuzz"

4A. synchronous

# console result

Number 4A
1: diagram
2: breeze
3: think
Doh!
5: continent
Doh!
7: drink
8: recently
9: off
10: people
11: arrange
...
Doh!
88: writer
89: had
90: satellites
91: rope
92: instead
Doh!
94: leave
Doh!
96: four
97: cup
98: western
99: look
100: why

4B. asynchronous

# console result

Number 4B
101: all
101: stock
Doh!
101: importance
101: smallest
101: atom
101: story
101: imagine
101: slope
101: vote
101: rubbed
101: or
...
101: arrangement
101: changing
Doh!
101: struggle
101: step
101: period
Doh!
101: gentle
101: glad