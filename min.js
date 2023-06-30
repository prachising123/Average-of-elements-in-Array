const numbers = [4,8,2,10,6];
function calculateAverage(arr){
    const sum = arr.reduce((total, num) => total + num,0);
    return sum / arr.length;
}
document.write(calculateAverage(numbers));
