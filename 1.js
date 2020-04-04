let myData = {
		name    : "Ari Irwandi",
		age 	: 23,
		address : "Kuningan, Jawa Barat",
		hobbies : "Belajar dan mencoba hal baru, dalam Coding dan Gaming",
		is_married : false,
		list_school : [
          {
            school_name:"SMKN 3 Kuningan",
            year_in:2011,
            year_out:2014,
            major : "Teknik Audio Video"
          },{
            school_name:"Univesitas Gunadarma",
			year_in:2015,
			year_out:2020,
			major : "Teknik Informatika"
          }],
		skills : [
          {
			Java : "Advanced",
            HTML : "Beginner",
			CSS : "Beginner",
			Javascript : "Beginner",
			MYSQL : "Beginner"
          }],
		interest_in_coding : true
    };



function biodata({_name,_age}){
  let res = JSON.parse(JSON.stringify(myData, function(a, b) {
    return typeof b === "string" ? b.toLowerCase() : b
  }));
  if (res.name === _name.toLowerCase() && myData.age === _age) {
    return myData 
  };
}

console.log(biodata({_name:"ari irwandi", _age:23}));
