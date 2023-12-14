# Sesión 2

## Ejercicio 1

- Escribe una arrow function que tome como entrada un objeto y devuelva una lista con sus propiedades. Solo puede tener como entrada un objeto y el tipo de vuelta tiene que ser un array.

```javascript
const person {
    name: “Lucas”,
    age: 27,
    profession:”Developer",
}
// return -> ["name", "age", "profession"]
```

## Ejercicio 2

- Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.

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

## Ejercicio 3

- Crea una clase a la que llamaremos "InvertirCadena" con las siguientes propiedades:
- Un atributo llamado `cadenaInvertir` que sea una cadena vacía.
- Una función en formato **arrow function**, que tome el atributo `cadenaInvertir` e imprima en pantalla el resultado invertido. Ej "Hola mundo" quedaría "odnum aloH".
- Si el parámetro de la cadena `cadenaInvertir` es vacío, lance un error (throw). Ej. "". throw error.
- Ahora instancia la clase en un objeto que llamaremos `invertirCadena`.

Ejecuta primero la función sin cambiar `cadenaInvertir`. ¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?. Ahora cambia el valor a `cadenaInvertir` y vuelve a llamar la función. ¿Cuál es el resultado?. Por último, intenta acceder al siguiente método `invertirCadena.nuevoMetodo()`. ¿Cómo podemos hacer para que no de un error?

## Ejercicio 4

- Crea una clase con el formato ES6. Esta clase va a tener dos atributos, _username_ y _password_ y un método _login()_ que compruebe que username tiene el valor **admin** y password el valor **passwd** y en caso positivo, lance una alerta diciendo que el usuario esté logeado, en caso contrario, que diga que el usuario o la contraseña son incorrectas. Siendo que:

```javascript
let login = new Login(“admin”, “passwd”) // alert -> User logged in
let logbad = new Login(“pepe”, “bad”) // alert -> User or passwd incorrect
```

## Ejercicio 5

En este ejercicio os voy a hacer mirar un poco de documentación extra. Y vamos a utilizar el fichero que se encuentra en `activity/2_session/index.html`:

- Crea dos _clickListener_, para los botones con id **loginSuccess** y **loginFailure**. En el primero crearemos un objeto login que sea correcto y llamaremos a la función para que de el resultado correcto. En el segundo crearemos un objeto login con parámetros incorrectos y llamaremos a login para que falle. Para ello consulta los siguientes documentos.
- [Get DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [Click Listener](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

## Ejercicio 6

En este ejercicio vamos a añadir asincronía al resto de botones:

- Crea dos _clickListener_, para los botones con id **loginSuccessAsync** y **loginFailureAsync**. En el primero llamaremos a la función `loginWitUsername` para que de el resultado correcto. En el segundo llamaremos a la función con parámetros incorrectos. Os dejo un par de pistas para resolver el ejercicio.

- Primero, `addEventListener('click', () => {})` no acepta asincronía ya que es una **función síncrona**. Pero es posible sustituir el segundo argumento `() => {}` que es una función, por una función asíncrona (solo habría que añadir una palabra reservada).

- `loginWithUsername` devuelve una promesa, que lanza una excepción si falla, por lo que **habría que atrapar esa excepción para que nuestro programa no falle**.
