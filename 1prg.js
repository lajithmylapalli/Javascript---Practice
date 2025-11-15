const div = (dividend,divisor)=> {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647; // handle overflow case
    }
    if (divisor === -1) {
        return -dividend;
    }
    console.log(Math.trunc(dividend / divisor));

};
div(10,3);
div(22,3);