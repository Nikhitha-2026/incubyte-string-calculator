class StringCalculator {
    constructor() {
      this.calledCount = 0;
    }
  
    Add(numbers) {
      this.calledCount++; 
      let numList = numbers.split(',').map(num => parseInt(num.trim(), 10));
      return numList.reduce((sum, num) => sum + num, 0);
    }
  
    GetCalledCount() {
      return this.calledCount; 
    }
  }
  
export default StringCalculator;
  