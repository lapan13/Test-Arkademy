function countLetters(str){
  let arr = str.split('');
  let occ = {};
  
  for(let i = 0; i < arr.length; i++){
    if(occ[arr[i]]){
      occ[arr[i]]++;
    } else {
      occ[arr[i]] = 1;
    }
  }
  
  for(var i in occ){
    if(occ[i]!==1){
      console.log(i+' : '+occ[i]);
    } 
  }
}

countLetters("bismillah !!!");
