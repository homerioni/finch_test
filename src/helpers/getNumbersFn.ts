export const getNumbersFn = (length: number, maxNum: number): number[] => {
    if (maxNum <= length || maxNum < 1 || length < 1) return [];

    const arr: number[] = [];

    while (arr.length < length) {
        const randomNum = Math.ceil(Math.random() * maxNum + 0.001);

        if (!arr.includes(randomNum) && randomNum <= maxNum) arr.push(randomNum);
    }

    return arr;
};
