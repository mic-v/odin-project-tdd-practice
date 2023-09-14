
export type Obj = {
    average: number;
    min: number;
    max: number;
    length: number;
};

export let analyzeArray = function(arr: number[]): Obj {
    let object: Obj = {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: arr.length
    }

    return object;
}

let average = function(arr: number[]): number {
    let avg = 0;
    for(let i = 0; i < arr.length; i++) {
        avg+= arr[i];
    }  
    avg = avg / arr.length;
    return avg;
}

let min = function(arr: number[]): number {
    if(arr.length === 0) return 0;
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        min = (arr[i] < min) ? arr[i] : min;
    }      
    return min;
}

let max = function(arr: number[]): number {
    if(arr.length === 0) return 0;
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        max = (arr[i] > max) ? arr[i] : max;
    }      
    return max;
}
