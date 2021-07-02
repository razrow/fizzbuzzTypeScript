for (let i = 0; i <= 100; i++){
    console.log(fizzbuzz(i));
}

function fizzbuzz(x: any): string {
    if(x % 3 == 0 && x % 5 == 0){
        return x as string + 'fizzbuzz';
    } else if (x % 3 == 0){
        return x as string + 'fizz';
    } else if (x % 5 == 0){
        return x as string + 'buzz';
    } else {
        return x as string;
    }
}