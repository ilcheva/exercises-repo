function argType() {
    let result = [];
    let count = {};

    Array.from(arguments).forEach(a => {
        let type = typeof a;
        result.push({ type, value: a });

        if (!count[type]) {
            count[type] = 0;
        }
        count[type]++;
    });
    result.forEach(r => console.log(`${r.type}: ${r.value}`))

    let sort = Object.entries(count).sort((a, b) => b[1] - a[1]);
    sort.forEach(e => console.log(`${e[0]} = ${e[1]}`));

}
argType('cat', 42, function () { console.log('Hello world!'); })