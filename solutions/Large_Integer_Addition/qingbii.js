function add(a, b) {
    const N = 5
    const M = Math.pow(10, N)
    const split = str => {
        let slen = str.length
        let end = slen
        let begin = Math.max(0, end - N)
        let arr = []
        while (begin) {
            arr.push(str.slice(begin, end))
            end = begin
            begin = Math.max(0, end - N)
        }
        arr.push(str.slice(0, end))
        return arr
    }
    const fixw = n => {
        let str = String(n)
        while (str.length < N) {
            str = '0' + str
        }
        return str
    }
    let aa = split(String(a))
    let bb = split(String(b))
    let len = Math.max(aa.length, bb.length)
    if (aa.length > bb.length) {
        let dlen = aa.length - bb.length
        for (let i = 0; i < dlen; i++) {
            bb.push(0)
        }
    } else if (bb.length > aa.length) {
        let dlen = bb.length - aa.length
        for (let i = 0; i < dlen; i++) {
            aa.push(0)
        }
    }
    let jin = 0
    let sum = []
    for (let i = 0; i < len; i++) {
        let ai = parseInt(aa.shift())
        let bi = parseInt(bb.shift())
        let ab = ai + bi + jin
        if (ab >= M) {
            sum.push(fixw(ab - M))
            jin = 1
        } else {
            sum.push(ab)
            jin = 0
        }
    }
    if (jin) {
        sum.push(1)
    }
    return sum.reverse().join('')
}
