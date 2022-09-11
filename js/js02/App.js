let d1 = 96
let d2 = 108
let d3 = 89

let k1 = 88
let k2 = 91
let k3 = 110

let dolphinsAverage = ((d1 + d2 + d3) / 3)
let koalasAverage = ((k1 + k2 + k3) / 3)

if (dolphinsAverage >= 100 || koalasAverage >= 100) {
    if (dolphinsAverage === koalasAverage) {
        console.log('Draw!')
    } else if (dolphinsAverage > koalasAverage) {
        console.log(`Dolphins win ${dolphinsAverage} to ${koalasAverage}!`)
    } else {
        console.log(`Koalas win ${koalasAverage} to ${dolphinsAverage}!`)
    }
} else {
    console.log('No time had higher than 100 points average')
}

d1 = 97
d2 = 112
d3 = 101

k1 = 109
k2 = 95
k3 = 123

dolphinsAverage = ((d1 + d2 + d3) / 3)
koalasAverage = ((k1 + k2 + k3) / 3)

if (dolphinsAverage >= 100 || koalasAverage >= 100) {
    if (dolphinsAverage === koalasAverage) {
        console.log('Draw!')
    } else if (dolphinsAverage > koalasAverage) {
        console.log(`Dolphins win Game 2 ${dolphinsAverage} to ${koalasAverage}!`)
    } else {
        console.log(`Koalas win Game 2 ${koalasAverage} to ${dolphinsAverage}!`)
    }
} else {
    console.log('No time had higher than 100 points average')
}

d1 = 97
d2 = 112
d3 = 101

k1 = 109
k2 = 95
k3 = 106

dolphinsAverage = ((d1 + d2 + d3) / 3)
koalasAverage = ((k1 + k2 + k3) / 3)

if (dolphinsAverage >= 100 || koalasAverage >= 100) {
    if (dolphinsAverage === koalasAverage) {
        console.log('Draw!')
    } else if (dolphinsAverage > koalasAverage) {
        console.log(`Dolphins win ${dolphinsAverage} to ${koalasAverage}!`)
    } else {
        console.log(`Koalas win ${koalasAverage} to ${dolphinsAverage}!`)
    }
} else {
    console.log('No team had higher than 100 points average')
}