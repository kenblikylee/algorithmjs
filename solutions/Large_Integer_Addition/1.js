function add(a, b) {
    let res = ''
    let c = 0
    a = a.split('')
    b = b.split('')
    while (a.length > 0 || b.length > 0 || c > 0) {
        c = ~~a.pop() + ~~b.pop() + c
        res = (c % 10) + res
        c >= 10 ? (c = 1) : (c = 0)
    }
    return res.replace(/^0+/, '')
}
