/*
We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked. 
Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess. 
You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).

1: Your guess is lower than the number I picked (i.e. num < pick).

0: your guess is equal to the number I picked (i.e. num == pick).

Keep Returning the result until the number that I the Computer picked matches your number
*/

// Input is 1 to n
// AI pick = random number generator with math.floor(Math.random() * n)

// Create a function that takes in an integer of N and returns the guessed number
// loop through the length of 1 to n, figure out if each number is equal to the random number with the provided guess(num)
// Check the result of the guess function, only return when guess results 0, which means it's equal to the number picked

// Solution #1, linear search
// Here I searched through 1 to n individually looking for a match.
// function guessNumber(n) {
//     let pick = Math.floor(Math.random() * n)

//     for (let i = 0; i <= n; i++) {
//         if (guess(i, pick) === 0) {
//             return i
//         }
//     }
// }

// function guess(guess, pick) {
//     if(guess > pick) {
//         console.log(`Your guess: ${guess}, Guess is higher than number picked`)
//         return -1
//     } else if(guess < pick) {
//         console.log(`Your guess: ${guess}, Guess is lower than number picked`)
//         return 1
//     } else {
//         console.log(`Your guess: ${guess}, Guess is equal to the number picked`)
//         return 0
//     }
// }
// console.log(guessNumber(1000000), '<<< AI pick')




















//Solution #2, binary search. This solution is way more efficient on larger number inputs.
// function binaryGuessNumber(n) {
//     let pick = Math.floor(Math.random() * n)
//     let start = 1;
//     let end = n;

//     while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     let attempt = guess(mid, pick)

//     // === 0 means the guess is correct
//     if (attempt === 0) {
//         return mid
//     // === -1 means guess is higher than pick
//     // Since the guess is higher, we don't need any number above this guess anymore since pick can only be lower than guess at this point.
//     // Since guess is not equal either, so we're going set the new end as mid -1 as our new range.
//     } else if (attempt === -1) {
//         end = mid - 1

//     // === 1 means guess is lower than pick
//     // Since the guess is lower, we don't need any number below this guess anymore since pick can only be higher than guess at this point.
//     // Since guess is not equal either, so we're going set the new end as mid +1 as our new range.
//     } else {
//         start = mid + 1
//     }
//  }
// }

// console.log(binaryGuessNumber(1000), '<<< AI pick')

// counter to create numbers for demo
// function counter(n) {
//     let numbers = []
//     for (let i = 0; i <= n; i++) {
//         numbers.push(i)
//     }
//     console.log(numbers)
// }

// counter(20)

// Binary sort demo