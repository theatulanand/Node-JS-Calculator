const arg = process.argv.slice(2); // taking arguments from terminal

//console.log(arg); || command --> node index.js add 1 2 || output --> [ 'add', '1', '2' ];

if (arg.length < 1) {
    console.error("!! Invalid Arguments.  Pass Input Like : node index.js add 1 2 or index.js sub 1 2 or index.js sin 90 or random");
} else {
    switch (arg[0]) {
        case 'add':
            console.log(+arg[1] + +arg[2]);
            break;
        case 'sub':
            console.log(+arg[1] - +arg[2]);
            break;
        case 'mult':
            console.log(+arg[1] * +arg[2]);
            break;
        case 'divide':
            console.log(+arg[1] / +arg[2]);
            break;
        case 'sin':
            console.log(Math.sin(+arg[1]));
            break;
        case 'cos':
            console.log(Math.cos(+arg[1]));
            break;
        case 'tan':
            console.log(Math.tan(+arg[1]));
            break;
        case 'random':
            const random = require('crypto-random'); // npm i crypto-random
            console.log(random.range(0, 10));
        default:
            break;
    }
}

