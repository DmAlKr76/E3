function f1 (start, finish) {
    let x = start;
    const y = setInterval(function () {
        console.log(x);
        x++;
        if (x > finish){
        clearInterval(y)
    }
    }, 1000)
}

f1(1, 11)