const quotes = [
    "Believe you can and you're halfway there.",
    "Dont wait. The time will never be just right.",
    "Your limitation only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesnt just find you. You have to go out and get it.",
    "The harder you work for something, the greater youll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Dont stop when youre tired. Stop when youre done."
  ];
  
  document.getElementById('generate').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerText = randomQuote;
  });
  