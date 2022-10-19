const arrayOfNumbers = [-10, 53, 67, 7, -3, 2, 0, 10, 89, 45, 8];
const counter = (array) => {
    let positives = array.filter((item) => item > 0).length;
    let negatives = array.filter((item) => item < 0).length;
    console.log(`Positives: ${positives}, Negatives: ${negatives}`);
}
counter(arrayOfNumbers);
