const quotes = [
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",
    },
    {
        quote: "There are better starters than me but I’m a strong finisher.",
        author: "Usain Bolt",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller",
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan",
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "Angelina Jolie",
    },
    {
        quote: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
        author: "Estée Lauder",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "Being happy never goes out of style.",
        author: "Lilly Pulitze",
    },
    {
        quote: " I don't go by the rule book…I lead from the heart, not the head.",
        author: "Princess Diana",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;