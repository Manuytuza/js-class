const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];
let usernameInput = "andres";
let passwordInput = 123;
let review = (usernameInput, passwordInput) =>{
    if(!usernameInput) return NaN;
    if(!passwordInput) return NaN;
   for (let i =0; i <usersDatabase.length; i++){
    if (usersDatabase[i].username === usernameInput && usersDatabase[i].password === passwordInput) {
        return true
    } 
    
}  return false
} 

if (review(usernameInput, passwordInput)){
    console.log("ingresas");
} else {
    console.log("no va");
}
