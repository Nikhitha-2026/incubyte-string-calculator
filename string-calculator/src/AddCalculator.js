export default function add(numbers) {
    if (!numbers || numbers.trim() === "") {
      return 0;
    }
  
    let delimiter = /,|\n/;
    numbers = numbers.replace(/"/g, '');
    console.log("numbers", numbers)
    let numbersArray = numbers;
  

    numbersArray = extractNumbers(numbersArray)

    const numList = numbersArray
      .split(delimiter)
      .map((num) => num.trim())
      .filter((num) => num !== "")
      .map((num) => {
        const parsedNum = parseInt(num, 10);
        return isNaN(parsedNum) || parsedNum > 1000 ? 0 : parsedNum;
    });

    
    return numList.reduce((sum, num) => sum + num, 0);
  }


  function extractNumbers(input) {
    const numbers = input.match(/\d+/g);
    const negativeNumbers = input.match(/-\d+/g);
  
    if (negativeNumbers && negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  
    return numbers ? numbers.join(', ') : '';
  }