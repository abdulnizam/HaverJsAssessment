const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

function numberOne() {
	console.log( 'Number 1')

	for (var i = 1; i < 101; i++) {
		const word = getRandomWordSync({ withErrors: false });

		console.log(i +': ' + word);
	};

}
// numberOne()

// Number 1
// 1: dried
// 2: pack
// 3: mysterious
// 4: disease
// ...
// 99: coffee
// 100: score

function numberTwo() {
	console.log( 'Number 2')

	for (var i=1; i <= 100; i++)
	{
	    if (i % 15 == 0)
	    {
	    	console.log(i +': ' + 'FizzBuzz');
	    }
	    else if (i % 3 == 0)
	    {
			console.log(i +': ' + 'Fizz');
	    }
	    else if (i % 5 == 0)
	    {
			console.log(i +': ' + 'Buzz');
	    }
	    else
	    {
	    	const word = getRandomWordSync({ withErrors: false });

			console.log(i +': ' + word);
	    }
	}

}
// numberTwo()

// Number 2
// 1: ruler
// 2: save
// 3: Fizz
// 4: such
// 5: Buzz
// 6: Fizz
// 7: snake
// 8: needs
// 9: Fizz
// 10: Buzz
// 11: one
// 12: Fizz
// 13: why
// 14: substance
// 15: FizzBuzz
// ...
// 98: daughter
// 99: Fizz
// 100: Buzz

function numberThreeA() {

	console.log( 'Number 3A')

	// async with fizz buzz

	for (var i=1; i <= 100; i++)
	{
	    if (i % 15 == 0)
	    {
	    	console.log(i +': ' + 'FizzBuzz');
	    }
	    else if (i % 3 == 0)
	    {
			console.log(i +': ' + 'Fizz');
	    }
	    else if (i % 5 == 0)
	    {
			console.log(i +': ' + 'Buzz');
	    }
	    else
	    {
	    	const word = getRandomWord({ withErrors: false });

			word.then(function(argument) {
					console.log(i +': ' + argument);
				}, function(err){
					console.log(err);
				})
	    }
	}

}
// numberThreeA()

// Number 3A
// 3: Fizz
// 5: Buzz
// 6: Fizz
// 9: Fizz
// 10: Buzz
// 12: Fizz
// 15: FizzBuzz
// 18: Fizz
// 20: Buzz
// 21: Fizz
// 24: Fizz
// 25: Buzz
//  ...
// 101: last
// 101: might
// 101: dangerous
// 101: shake
// 101: direct
// 101: dress
// 101: ranch
// 101: compass
// 101: cry
// 101: seen
// 101: power
// 101: declared
// 101: pictured
// 101: start
// 101: brought
// 101: avoid
// 101: movement
// 101: reader
// 101: valley
// 101: principal
// 101: basket
// 101: without
// 101: women
// 101: consider

function numberThreeB() {

	console.log( 'Number 3B')

	// async without fizz buzz

	for (var i = 1; i < 101; i++) {
		const word = getRandomWord({ withErrors: false });

		word.then(function(argument) {

				console.log(i +': ' + argument)

			})
	}

}
// numberThreeB()

// Number 3B
// 101: hold
// 101: care
// 101: sale
// 101: cool
// 101: eat
// 101: copy
// 101: friend
// 101: bell
// 101: seen
// ...
// 101: company
// 101: late
// 101: fresh
// 101: everyone
// 101: organized
// 101: exercise
// 101: fifteen
// 101: arrow
// 101: imagine
// 101: hello
// 101: forest


function numberFourA() {

	console.log( 'Number 4A')

	// synchronous & witherrors true
	
	for (var i = 1; i < 101; i++) {

		try {
		   	
		   	const word = getRandomWordSync({ withErrors: true });

			console.log(i +': ' + word)

		}
		catch(err) {

			console.log('Doh!')

		}

	}

}
// numberFourA()

// Number 4A
// 1: diagram
// 2: breeze
// 3: think
// Doh!
// 5: continent
// Doh!
// 7: drink
// 8: recently
// 9: off
// 10: people
// 11: arrange
// ...
// Doh!
// 88: writer
// 89: had
// 90: satellites
// 91: rope
// 92: instead
// Doh!
// 94: leave
// Doh!
// 96: four
// 97: cup
// 98: western
// 99: look
// 100: why

function numberFourB() {

	console.log( 'Number 4B')

	// asynchronous & witherrors true
	
	for (var i = 1; i < 101; i++) {

		const word = getRandomWord({ withErrors: true });

		word.then(function(argument) {

			console.log(i +': ' + argument);

		}, function(err){

			console.log('Doh!');

		})

	}

}
// numberFourB()

// Number 4B
// 101: all
// 101: stock
// Doh!
// 101: importance
// 101: smallest
// 101: atom
// 101: story
// 101: imagine
// 101: slope
// 101: vote
// 101: rubbed
// 101: or
// ...
// 101: arrangement
// 101: changing
// Doh!
// 101: struggle
// 101: step
// 101: period
// Doh!
// 101: gentle
// 101: glad

function runProgram (argument) 
{
	switch(argument) {
	    case 'one':
	        numberOne()
	        break;
	    case 'two':
	        numberTwo()
	        break;
	    case 'threeA':
	        numberThreeA()
	        break;
	    case 'threeB':
	        numberThreeB()
	        break;
	    case 'fourA':
	        numberFourA()
	        break;
	    case 'fourB':
	        numberFourB()
	        break;
	    default:
	        numberOne()
	        numberTwo()
	        numberThreeA()
	        numberThreeB()
	        numberFourA()
	        numberFourB()
	}
}

// pass these parameter to get the results - 'all', 'one', 'two', 'threeA', 'threeB', 'fourA', 'fourB'

runProgram('two')
// runProgram('fourB')


