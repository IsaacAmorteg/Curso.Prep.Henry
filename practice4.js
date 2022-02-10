//Objects
function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
    let user = usuario;
    console.log(user.email);
    if (("email" in user === true) && (user.email != undefined)) {
        return console.log(true);
    }
    return console.log(false);
  }

  //tieneEmail({ usernombre: 'Samuel', email: null});

  