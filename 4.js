function hexa(kode){
  let result = null;
  if(kode.charAt(0)=="#" && (kode.length===4 || kode.length===7)){
    for(let i = 1; i < kode.length; i++){
      if((kode.charCodeAt(i) > 47 && kode.charCodeAt(i) < 58) || 
         (kode.charCodeAt(i) > 64 && kode.charCodeAt(i) < 71) || 
         (kode.charCodeAt(i) > 96 && kode.charCodeAt(i) < 103 )){
        result = true;
      } else {
        result = false;
      }
    } 
  } else {
    result = false;
  }
  return result
}

console.log(hexa("#c23ef5"));
