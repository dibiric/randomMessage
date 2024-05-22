const predictions = [
    "You will find great success in your career.",
    "A new relationship will bring joy into your life.",
    "Unexpected financial gains are coming your way.",
    "A long-held dream will soon come true.",
    "You will encounter a significant challenge soon."
];
  
const timeframes = [
    "in the next few days",
    "within this week",
    "by the end of the month",
    "in the coming year",
    "very soon"
];
  
const advices = [
    "Trust your instincts.",
    "Stay positive and open-minded.",
    "Be cautious and plan ahead.",
    "Take risks, but be prepared.",
    "Seek advice from trusted friends."
];

const randomN = arr => {
    const r = Math.floor(Math.random() * arr.length);
    return arr[r];
};




const message = () => { 
    const prediction = randomN(predictions);
    const timeframe = randomN(timeframes);
    const advice = randomN(advices);

    console.log(`${prediction} This will happen ${timeframe}. ${advice}`)
    return `${prediction} This will happen ${timeframe}. ${advice}`

}

message()
