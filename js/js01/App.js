const markWeight = 78
const markHeight = 1.69

const johnWeight = 92
const johnHeight = 1.95

let children;

const markBMI = markWeight / (markHeight ** 2)
const johnBMI = johnWeight / (johnHeight ** 2)

const markHigherBMI = (markBMI > johnBMI) ? true : false;
console.log('Mark', markBMI, 'John', johnBMI)
console.log("Is Mark's BMI Higher?", markHigherBMI)

const markWeight2 = 95
const markHeight2 = 1.88

const johnWeight2 = 85
const johnHeight2 = 1.76

const markBMI2 = markWeight2 / (markHeight2 ** 2)
const johnBMI2 = johnWeight2 / (johnHeight2 ** 2)

const markHigherBMI2 = (markBMI2 > johnBMI2) ? true : false;
console.log('Mark', markBMI2, 'John', johnBMI2)
console.log("Is Mark's BMI Higher?", markHigherBMI2)

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})`)
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})`)
}