// Ejercicio 1

const getKeys = (obj) => Object.keys(obj);

const person = {
  name: "John",
  age: 30,
  country: "USA",
};

const keys = getKeys(person);

console.log(keys);

// Ejercicio 2

/* - Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.

El valor de this en JavaScript puede variar dependiendo de cómo se invoca una función. Aquí hay algunos contextos comunes en los que this puede referirse a diferentes valores:

1. Global context: Cuando this se usa fuera de cualquier función o en el nivel superior del código, se refiere al objeto global (por ejemplo, window en navegadores o global en Node.js).

```javascript
console.log(this === window); // En un navegador, esto será true
```

2. Function context: En una función normal, el valor de this puede cambiar dependiendo de cómo se llama la función.

```javascript
function myFunction() {
  console.log(this);
}

myFunction(); // En este caso, this apunta al objeto global (window en un navegador)
```

3. Object context: Cuando un método es llamado dentro de un objeto, this hace referencia al objeto en sí mismo.

```javascript
const obj = {
  value: 42,
  getValue() {
    console.log(this.value);
  },
};

obj.getValue(); // Imprimirá 42 ya que this apunta al objeto 'obj'
```

4. Constructor context: Dentro de un constructor de una clase, this hace referencia a la instancia del objeto creado por esa clase.

```javascript
function MyClass(value) {
  this.value = value;
}

const instance = new MyClass(10);
console.log(instance.value); // Imprimirá 10, ya que 'this' apunta a la instancia 'instance'
```

- ¿Qué diferencias hay entre las arrow functions y las function expressions?.

Las diferencias entre arrow functions y function expressions son:

1. this binding: Las arrow functions no tienen su propio this. En cambio, toman prestado el this del ámbito circundante en el que se definen. Por otro lado, las function expressions tienen su propio this, que se determina en tiempo de ejecución dependiendo de cómo se llama la función.

2. Sintaxis: Las arrow functions tienen una sintaxis más concisa que las function expressions. Si el cuerpo de la función es una sola expresión, las llaves y la declaración de return son implícitas en las arrow functions.

Ejemplo de diferencia entre una arrow function y una function expression:

```javascript
// Arrow Function
const arrowFunc = () => {
  console.log(this);
};

// Function Expression
const funcExpr = function () {
  console.log(this);
};

const obj = {
  value: 42,
  arrow: arrowFunc,
  func: funcExpr,
};

obj.arrow(); // El this en la arrow function apunta al valor de 'this' del contexto donde fue definida (podría ser el objeto global)
obj.func(); // El this en la function expression apunta al objeto 'obj'
``` 
*/

// Ejercicio 3

class InvertirCadena {
  constructor() {
    this.cadenaInvertir = "";
  }

  invertirTexto() {
    if (this.cadenaInvertir === "") {
      throw new Error("¡Error! La cadena está vacía.");
    } else {
      const textoInvertido = this.cadenaInvertir.split("").reverse().join("");
      console.log(textoInvertido);
    }
  }

  nuevoMetodo() {
    console.log("¡Hola! Soy un nuevo método.");
  }
}

const invertirCadena = new InvertirCadena();

try {
  invertirCadena.invertirTexto();
} catch (error) {
  console.error(error.message);
}

invertirCadena.cadenaInvertir = "Hola mundo";
invertirCadena.invertirTexto();

if (invertirCadena.nuevoMetodo) {
  invertirCadena.nuevoMetodo();
} else {
  console.log("El método no está disponible en este contexto.");
}

/* Al ejecutar este código, la primera llamada a invertirTexto() lanza un error porque cadenaInvertir está vacía. Al cambiar cadenaInvertir a "Hola mundo" y llamar invertirTexto(), imprime la cadena invertida. El bloque condicional al intentar acceder a nuevoMetodo() verifica si existe para evitar un posible error si no está definido en el contexto actual. */

// Ejercicio 4

class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") {
      alert("Usuario logeado");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
}

let login = new Login("admin", "passwd");
let logbad = new Login("pepe", "bad");

login.login();
logbad.login();

// Ejercicio 5
document.addEventListener("DOMContentLoaded", function () {
  // Obtén referencias a los botones por su ID
  const btnLoginSuccess = document.getElementById("loginSuccess");
  const btnLoginFailure = document.getElementById("loginFailure");

  btnLoginSuccess.addEventListener("click", function () {
    const login = new Login("admin", "passwd");
    login.login();
  });

  btnLoginFailure.addEventListener("click", function () {
    const login = new Login("pepe", "bad");
    login.login();
  });
});

// Ejercicio 6

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const btnLoginSuccessAsync = document.getElementById("loginSuccessAsync");
  const btnLoginFailureAsync = document.getElementById("loginFailureAsync");

  btnLoginSuccessAsync.addEventListener("click", async function () {
    try {
      const result = await loginWithUsername("admin", "passwd");
      alert(result);
    } catch (error) {
      alert(error);
    }
  });

  btnLoginFailureAsync.addEventListener("click", async function () {
    try {
      const result = await loginWithUsername("pepe", "bad");
      alert(result);
    } catch (error) {
      alert(error);
    }
  });
});
