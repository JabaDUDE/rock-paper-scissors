# My Awesome Project

While working my way through 100Devs classes, we did short codes regarding rock,paper, scissors, and I felt inspired
to just full on build it based on that simplistic code.

**Link to project:** https://jabadude.github.io/rock-paper-scissors/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Starting out, I just wanted to functionality to work. So I created the three buttons and then
worked out the javascript so that when you clicked on a button, you would get the comparison of
what you picked and what the bot randomly picked. After I got the functionality to work,
I worked on the CSS to make it more pleasant to look at. Then, I wanted to expand on it
and add a counter on how many times the player wins vs the bot. This, temporarily, broke my code
and I ended up having to rewrite my conditional statements in my whoWon() function and, as you can
see, now looks a little bit more repetitive than I would like it to be. The final touch
was adding a vertical line between the two comparisons on the page.

## Lessons Learned:

- I learned how to create a vertical line and ways to make it so surrounding elements that are
  constantly changing do not overlap with it.
- I learned a little bit more about scopes and how it can impact the code. For me, it impacted
  the counter. If I left the initial value of 0 inside the function, it would reset to 0 after every call,
  which is not what I wanted to happen. To correct that, I had to put the initial value on the global scale
  and then increment and update the count on the page from inside the conditional statements.
