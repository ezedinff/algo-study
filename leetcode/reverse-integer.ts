function reverse(x: number): number {
    const limit = Math.pow(2, 31); // 32 bit integer
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};