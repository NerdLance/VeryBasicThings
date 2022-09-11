const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [];
const totals = [];

tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

totals.push(bills[0] + tips[0])
totals.push(bills[1] + tips[1])
totals.push(bills[2] + tips[2])

console.log(`Bill 1 was ${bills[0]}, the tip was ${tips[0]}, and the total was ${totals[0]}.`)
console.log(`Bill 2 was ${bills[1]}, the tip was ${tips[1]}, and the total was ${totals[1]}.`)
console.log(`Bill 3 was ${bills[2]}, the tip was ${tips[2]}, and the total was ${totals[2]}.`)