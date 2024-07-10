function findCommonPrefixLength (str, prefix) {
    const splitStr = str.split('');
    const splitPrefix = prefix.split('');
    let number = 0;
      for (let i=0; i<splitPrefix.length; i++) {
        if (splitPrefix[i] === splitStr[i]) {
          number++
      } else {
          break;
      }
    }
    return number;
  }
  
  function findCommonPrefixLengthSum(str) {
    const resultArr = [];
    let curStr = str;
    while (curStr) {
      const commonPrefixLength = findCommonPrefixLength(str, curStr);
        if (commonPrefixLength > 0) {
          resultArr.push(commonPrefixLength);
      }
      curStr = curStr.slice(1);
    }
    return resultArr.reduce((acc, curValue) => acc + curValue, 0)
  }
  
  function findCommonPrefixLengths(inputs) {
    const result = [];
    for (let i=0; i<inputs.length; i++) {
        const length = findCommonPrefixLengthSum(inputs[i]);
      result.push(length);
    }
    return result;
  }
  
  console.log('RESULT', findCommonPrefixLengths(['abcabcd', 'ababaa', 'aa', 'addadd']))