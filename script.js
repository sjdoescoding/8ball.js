
eightBall = () => {
    const answer = Math.floor(Math.random() * 20) + 1;

    // positive answers
    if(answer === 1) { 
        console.log(`It is certain`);
    } 

    else if (answer === 2) {
        console.log(`It is decidedly so`);
    } 

    else if (answer === 3) {
        console.log(`Without a doubt`);
    } 

    else if (answer === 4) {
        console.log(`Yes - definitely`);
    } 

    else if (answer === 5) {
        console.log(`You may rely on it`);
    } 

    else if (answer === 6) {
        console.log(`As I see it, yes`);
    } 

    else if (answer === 7) {
        console.log(`Most Likely`);
    } 

    else if (answer === 8) {
        console.log(`Outlook good`);
    } 

    else if (answer === 9) {
        console.log(`Yes`);
    } 

    else if (answer === 10) {
        console.log(`Signs point to yes`);
    } 

    // Neutral answers
    else if (answer === 11) { 
        console.log(`Reply hazy, try again`);
    } 

    else if (answer === 12) {
        console.log(`Ask again later`);
    } 

    else if (answer === 13) {
        console.log(`Better not tell you now`);
    } 

    else if (answer === 14) {
        console.log(`Cannot predict now`);
    } 

    else if (answer === 15) {
        console.log(`Concentrate and ask again`);
    } 
    
    // Negative answers
    else if (answer === 16) { 
        console.log(`Don't Count on it`);
    } 

    else if (answer === 17) {
        console.log(`My reply is no`);
    } 

    else if (answer === 18) {
        console.log(`My sources say no`);
    } 

    else if (answer === 19) {
        console.log(`Outlook not so good`);
    }

    else if (answer === 20) {
        console.log(`Very Doubtful`);
    }

    return eightBall;

}

eightBall();
