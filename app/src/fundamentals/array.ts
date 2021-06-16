export function removeDuplicates(nums: number[]): number {
    nums = [...new Set(nums)];
    console.log(nums);
    return nums.length;
};


const containsDuplicate = (nums: Array<number>): boolean => {
    const counter = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if ((counter.get(nums[i]) ?? 0)) {
            return true;
        }
        counter.set(nums[i], (counter.get(nums[i]) ?? 0) + 1);
    }
    return false;
}


const getSingleNumber = (nums: number[]): number => {
    const counter = new Map<number, number>();
    nums.forEach((n) => counter.set(n, (counter.get(n) ?? 0) + 1));
    return nums.filter((n) => counter.get(n) === 1)[0];
}