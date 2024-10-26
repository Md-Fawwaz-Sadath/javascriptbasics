function add(x,y = 5) {
    return x + y;
}

const ans = add(10);
console.log(ans);

function add1(x, y = 5, z) {
    return x + y + z;
}

const ans1 = add1(10,20);
console.log(ans);

