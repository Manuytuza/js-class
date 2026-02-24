//bases de datos

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

// ejercicio PLatzy

//let userNamePrompt = prompt("introduce your username");
//let passwordPrompt = prompt("introduce your password");

let validarUsuario = (username, password) => {
    for(let i = 0; i < usersDatabase.length; i++) {
        if(usersDatabase[i].username === username && 
            usersDatabase[i].password === password
        ) {
            return(`bienvenido ${usersDatabase[i].username}, tu timeline es: ${usersTimeline[i].timeline}`);
            
          } 
    }; return("Usuario o contraseña incorrectos");
};
// platzy answer 
/*
const username = prompt("CuÃ¡l es tu usuario?");
const password = prompt("CuÃ¡l es tu contraseÃ±a?");

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("Uuups, usuario o contraseÃ±a incorrectos!");
  }
}

signIn(username, password);
*/
// codigo pro 
let userNamePrompt = prompt("introduce your username");
let passwordPrompt = prompt("introduce your password");

function login(username, password) {

    const user = usersDatabase.find(u =>
        u.username === username && u.password === password
    );

    if (!user) return null;

    const timeline = usersTimeline.find(u =>
        u.username.toLowerCase() === username.toLowerCase()
    );

    return {
        username: user.username,
        timeline: timeline ? timeline.timeline : "Sin publicaciones"
    };
}

const resultadoPro = login(userNamePrompt, passwordPrompt);

if (resultadoPro) {
    console.log(`Bienvenido ${resultadoPro.username}`);
    console.log(`Timeline: ${resultadoPro.timeline}`);
} else {
    console.log("Credenciales incorrectas");
}


