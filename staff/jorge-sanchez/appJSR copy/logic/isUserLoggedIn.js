function isUserLoggedIn() { // Crea la función llamada IsUserLoggedIn que ejecutará lo siguiente si se llama:
    return !!sessionStorage.userId // La idea es devolver un booleano. Para eso:
    // 1. Accedemos al userId de la sessionStorage del navegador del usuario.
    // 2. con el ! convertimos a booleano el userId, para valorar en userId tiene valor. 
    //   - con el doble !! hacemos una doble negación, de tal forma que devolveremos true si en userId tiene valor.

}