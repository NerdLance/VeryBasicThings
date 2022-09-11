const printForecast = (temps) => {
    let thermString = ``

    for (let i = 1; i <= temps.length; i++) {
        thermString += `${temps[i-1]}C in ${i} days ... `
    }

    console.log(thermString)
}

const data1 = [17, 21, 23]

printForecast(data1)