const alpahbets = ['a', 'a', 'a', 'b', 'b', 'c', 'd', 'd', 'e', 'a'];

const total = alpahbets.reduce((accumulate, current) => {
    if (accumulate[current]) {
        accumulate[current] += 1;
    } else {
        accumulate[current] = 1;
    } return accumulate;
}, {})

console.log(total);