function validator(username, password) { 
  let name = /^(?=([A-Z]{7})).{7}$/;
  let pass = /^((?=(.*[a-zA-Z]{1}))(?=(.*[0-9]{1}))(?=(.*[#]{1}))).{9,15}$/;
  
  if(username.match(name) && password.match(pass)) { 
    console.log('Login Berhasil');
    return true;
  } else {
    console.log('Login Gagal ! \nUsername harus menggunakan huruf besar, dengan tepat 7 karakter.\nPassword harus terdiri dari huruf besar, hurud kecil, angka dan tanda "#", dengan panjang 9-15 karakter');
    return false;
  }
}

console.log(validator("ARIRWND", "#Inipa55word"));
