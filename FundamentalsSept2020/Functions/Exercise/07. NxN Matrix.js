function NxNMatrix(n) {
    let repeat = function (n) {
        let total = [];
        for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
                row+=n+' '

            }
            total.push(row)

        }
        return total.join('\n');
    }
    return repeat(n);
     
}
console.log(NxNMatrix(2));
