// this is the basic void function basically it is not returning anything but if we want to we can return any type of data
let sayHi = () => {
  // any execution / task that we want perform in the function

  console.log("hellow  world");
};

// if we dont want to return anything from the function used void keyword
var voidFunctionReturn = (): void => {
  // Your execution here
};

// this function return string type value back
let stringFunctionReturn = (): string => {
  // any execution / task that we want perform in the function

  return "Hello world";
};

let stringORnumberreturn = (): string | number => {
  return 89;
};

// arguments with the type if we don't provide the type of the arguments in the function it can pass any type of argument ( string | number | boolean etc )

var argumentsFunction = (num: number) => {
  return num * 2;
};

// passing a object in te function as argument
var objectArgument = (user: {
  username: string;
  age: number;
  phone?: string;
}) => {
  // your executions
};

// --------------------------- TYPE ALIES -------------------------
// it is a way of pointing to the already created variables with their type for avoiding the re-write and making the code easy to
type UserType = {
  username: string;
  age: number;
  phone?: string;
};

var typeAliesFunction = (user: UserType) => {
  // your executions
};

// using a functon allies to create diffrent functions
type myFunction = (a: number, b: string) => void;

let write: myFunction = (num, str) => {
  console.log(num + "times" + str);
};

// this is how we can provide a option between specified value no other value can be written or selected in here toher than "dark" and "light"
type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  userTheme: "dark" | "light";
};

var userWithTheme: UserType2 = { username: "Raza", age: 12, userTheme: "dark" };
var userWithTheme2: UserType2 = {
  username: "Raza2",
  age: 18,
  userTheme: "light",
};

//-----------------------------------------------------------INTERFACE------------------------------------------------------------------------
interface IUser {
  name: string;
  age: number;
  email: string;
}

// so basically this IEmployee interface will have everything the user inteface face have and in addition we add some more keys that we want to have.
interface IEmployee extends IUser {
  employeeID: number;
}

const user1: IUser = { name: "John", email: "John@example.com", age: 18 };
const emp: IEmployee = {
  name: "Raza",
  email: "xyz@gmail.com",
  age: 18,
  employeeID: 178976,
};

// -------------------------------------------------------------GENERICS----------------------------------------------------------------------
interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  description: string;
  extra: IAuthor[] | ICategory[];
}

// here we are using the type generic so whatever datatype or interface or allies anything we pass when using this interface will be used in the extra key for example if i pass string then the extra key will hold string values
interface IPostBetter<T> {
  id: number;
  title: string;
  description: string;
  extra: T;
}

const betterPost: IPostBetter<string> = {
  id: 123,
  title: "New",
  description: "this is the new description",
  extra: "Hiii",
};
const newPost: IPostBetter<any[]> = {
  id: 123,
  title: "new",
  description: "this is the new description",
  extra: ["Hii", "Byee", 22, false],
};

// Generic interface with more datatypes
interface IPostBetterArray<T> {
  id: number;
  title: string;
  description: string;
  extra: T[];
}

const betterPostArray: IPostBetterArray<string> = {
  id: 123,
  title: "New",
  description: "this is the new description",
  extra: ["Hiii", "Byeee"],
};

// Adding limitation in the Generic interface as in the below one we can only pass the object
interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  description: string;
  extra: T[];
}

// as you can see we can pass the formate of the object
var evenbetter: IPostEvenBetter<{ userName: string; age: number }> = {
  id: 123,
  title: "New",
  description: "this is the new description",
  extra: [
    { userName: "name", age: 123 },
    { userName: "xyz", age: 123 },
  ],
};


// or we can pass an allies of object or an interface here as well
var evenBetter: IPostEvenBetter<IAuthor> = {
  id: 123,
  title: "New",
  description: "this is the new",
  extra: [{ id: 123, username: "name" }],
};
