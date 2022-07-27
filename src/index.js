module.exports = function reverse (n) {
    n = Math.abs(n);
    if (n < 10)
        return n;
    if (n<100)
        return ((n%10)+','+reverse(Math.trunc(n/10))).split(',').join('');
    else{
        return ((n%10)+','+reverse(Math.trunc(n/10))).split(',').join('');
    }
}
