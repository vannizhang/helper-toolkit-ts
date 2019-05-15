const abbreviateNumber = function(num:number, fixed?:number) {
    if (num === null) { return null; } // terminate early
    if (num === 0) { return '0'; } // terminate early
    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    fixed = (num > 10000) ? 0 : 1;
    const b: string[] = (num).toPrecision(2).split("e"); // get power
    const k:number = b.length === 1 ? 0 : Math.floor(Math.min(+b[1].slice(1), 14) / 3); // floor at decimals, ceiling at trillions
    const c:number = k < 1 ? +num.toFixed(0 + fixed) : +(num / Math.pow(10, k * 3) ).toFixed(fixed); // divide by power
    const d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
    const e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
    return e;
};

const numberWithCommas = (x:number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export {
    abbreviateNumber,
    numberWithCommas
}