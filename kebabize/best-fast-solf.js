function kebabize(str) {
    return str.replace(/[^a-z]/ig, '').
    replace(/^[A-Z]/, c => c.toLowerCase()).
    replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}