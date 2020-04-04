function pembagi(arr, size){
  let newArray = [];
  for (let i = 0; i < arr.length; i += size) {
    if((arr.length % size)!==1){
      myArr = arr.slice(i, i+size);
      newArray.push(myArr);
    } else {
      myArr = arr.slice(i, i+size);
      if(myArr.length!==1){
        newArray.push(myArr);
      } else {
        newArray[newArray.length-1].push(myArr[0]);
      }
    }
  }
  return newArray;
}

console.log(pembagi([1,2,3,4,5], 2));
