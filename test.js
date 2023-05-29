String.prototype.hexToRgb = function() {
    this.replace("#", "")
    if (this.length == 2) {
        result = parseInt(this, 16)
    } else if (this.length == 3) {
        result = this.split("").map(a => String(parseInt(a.repeat(2), 16)))
    } else if (this.length == 6) {
        result = this.match(/.{1,2}/g).map(a => String(parseInt(a, 16)))
    } else result = "255, 0, 0"
    return String(result)
}

// console.log("ff0000".hexToRgb())

class Test {
    constructor({one=11, two, three}) {
        this.one = one,
        this.two = two,
        this.three = three
    }
}

a = new Test({one: 2, three: 3, two: 2})
console.log(a)