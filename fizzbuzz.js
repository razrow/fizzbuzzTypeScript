for (var i = 0; i <= 100; i++) {
    console.log(fizzbuzz(i));
}
function fizzbuzz(x) {
    if (x % 3 == 0 && x % 5 == 0) {
        return x + 'fizzbuzz';
    }
    else if (x % 3 == 0) {
        return x + 'fizz';
    }
    else if (x % 5 == 0) {
        return x + 'buzz';
    }
    else {
        return x;
    }
}
