function f1(a) {
    return function f2(b) {
        return a + b
    }
}
const c = f1(1)(9)
console.log(c)