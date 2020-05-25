function moveZerosToEndFast(a) {
    if (a.length <= 1) { return a; }

    let zi = a.indexOf(0); // O(N)
    if (zi === -1 || zi === a.length - 1) { return a; }

    for(let i = zi + 1; i < a.length; i++) {
        if (a[i] !== 0) {
            a[zi++] = a[i];
            a[i] = 0;
        }
    } // O(N)

    return a;
}