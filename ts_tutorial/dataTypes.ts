// One way to declare a variable with type string or ou can also dirctly type the value in the variable and it will set the type of the variabe to the type of data you entered.
let myName: string = "Raza";

// if you don't have the intial data for a variable you can declare it like this:
let myNameNoInitial: string;

// other way
let myNameOther = "Raza";

// after declaring aa varibale with some datatype we can't change the ytpe of the datatype like we used to do in js
// it is not possible to do so

var age = 18;

// it is not possible to do so as we are trying to change the etype of the varibale we will get a warning here
// var age = "eighteeen"

// we can also declare two or more types to a single varibale for ex
// in the below case we can set both the string and the number in the nameOrage variable
var nameOragr: string | number; // these are called a union types

nameOragr = "Nmae";

nameOragr = 18;

// as the nameOrage variable doesn't have boolean type it will show us a warning
// nameOragr = true;

// -------------------------------------------------------------ARRAY-------------------------------------------------------------------------

// in this we define a array of only strings
var arraytpe: string[];

// anpther way is (in the below array we can't add any other type of data like number as we have declared the intial values of the array to be string we can do same for number | string | boolean)
var array2 = ["name", "name2", "name3"];

// will get an error message
// array2.push(2)

array2.push("newName");

// Union type array

var newArray: (string | number)[];

newArray = [1, "twenty"];

//  ------------------------------------------------------------OBJECTS-----------------------------------------------------------------------

// in the below object we can change the data of the object but not the type of the data of the object and we also can't add new key value pair for ex user.phone = 9892817 in the below case
let user = {
  username: "Raza",
  age: 23,
  isAdmin: false,
};

user.username = "Farhan";

// this will give warning as in the intial declaration the type of the user.age is number and now we are trying to change it to a string
// user.age = "18"


// Now creating a object but instead of giving the intial value defining the type of the keys

var newObject : {
    name: string,
    age: number,
    isAdmin: boolean,
}

// we have to set the data of the all the keys in the object
newObject = {
    name:"Raza",
    age: 18,
    isAdmin: false
}


// Now creating a object in this some user have phone numbers and some don't
var newObject2 : {
    name: string,
    age: number,
    isAdmin: boolean,
    phone ?: string
}

// as you can we are not getting any type of warning here but we are not adding the phone number it's because the phone is has a condition
newObject2 = {
    name:"Raza",
    age: 18,
    isAdmin:true
}


// ------------------------------------------------------------ANY----------------------------------------------------------------------------

// if we declare avariable and doesn't provide any initial data or explicit type to it then it can store any type of data in that variable
let anyType:any;     
// || let anyType;

anyType = 12;
anyType = "Raza"
anyType = false;

// in this way we can store any type of data inside of the array we only need to used the any dataType
let testArray : any[]

testArray = ["1", 2, false];