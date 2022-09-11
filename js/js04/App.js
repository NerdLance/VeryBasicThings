
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = (dolphinsAvg, koalasAvg) => {
    if (dolphinsAvg >= (koalasAvg * 2)) {
        console.log(`Dolphins win (${dolphinsAvg} to ${koalasAvg})`);
    } else if (koalasAvg >= (dolphinsAvg * 2)) {
        console.log(`Koalas win (${koalasAvg} to ${dolphinsAvg})`);
    } else {
        console.log('No winner!');
    }
}

const dolphinsAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);

checkWinner(dolphinsAverage1, koalasAverage1);

const dolphinsAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);

checkWinner(dolphinsAverage2, koalasAverage2);