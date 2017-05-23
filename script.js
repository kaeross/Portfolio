// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//change color of page


//quotes array
var quoteBox = [

	{
		quote:  "Don't cry because it's over, smile because it happened.", 
		source: "Dr Seuss",
		citation: "https://www.goodreads.com/quotes",
		year: 
	},
	{
		quote:  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", 
		source: "Marilyn Monroe",
		citation: "https://www.goodreads.com/quotes",
		year: 
		tags: [attributed-no-source, best, life, love, mistakes, out-of-control, truth, worst]
	},
	{
		quote:  "You only live once, but if you do it right, once is enough.", 
		source: "Mae West",
		citation: "https://www.goodreads.com/quotes",
		year: 
	},
	{
		quote:  "I hope that in this year to come, you make mistakes. Because if you are making mistakes, then you are making new things, trying new things, learning, living, pushing yourself, changing yourself, changing your world. You're doing things you've never done before, and more importantly, you're doing something.", 
		source: "Neil Gaiman",
		citation: "https://www.brainyquote.com/quotes/quotes/n/neilgaiman676237.html?src=t_year",
		year: 
	},
	{
		quote:  "We realize the importance of our voices only when we are silenced.", 
		source: "Malala Yousafzai",
		citation: "http://stylecaster.com/beauty/strong-women-quotes/#ixzz4hwkxAQnX",
		year: 
	},
	{
		quote:  "Don't cry because it's over, smile because it happened.", 
		source: "Dr Seuss",
		citation: "https://www.goodreads.com/quotes",
		year: 
	},
	{
		quote:  "Don't cry because it's over, smile because it happened.", 
		source: "Dr Seuss",
		citation: "https://www.goodreads.com/quotes",
		year: 
	},

];


//getRandomQuote
	//select random quote from array
	//return randomly quoted object

//printQuote function
	//call getRandomQuote
		//store object in variable
	//return randomlyquoted object 
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
	//only citation if available
	//only year if available

//printQuote display to page:
document.getElementById('quote-box').innerHTML 

