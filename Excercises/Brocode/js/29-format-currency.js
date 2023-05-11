let myNum = 100;

// myNum = myNum.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
// myNum = myNum.toLocaleString(undefined, {style: 'percent'});
myNum = myNum.toLocaleString(undefined, {style: 'unit', unit: 'celsius'});

console.log(myNum);