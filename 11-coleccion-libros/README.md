## Colección de libros

Este es un proyecto de JavaScript que permite crear una colección de libros. El código está dividido en dos archivos:

* `index.html`: El archivo HTML que contiene la interfaz de usuario.
* `app.js`: El archivo JavaScript que contiene la lógica del programa.

### index.html

El archivo `index.html` contiene la siguiente interfaz de usuario:

* Un formulario para agregar un nuevo libro.
* Una tabla que muestra la lista de libros.

### app.js

El archivo `app.js` contiene la siguiente lógica del programa:

* La clase `Libro` representa un libro.
* La clase `UI` proporciona métodos para mostrar la lista de libros, agregar un libro nuevo y eliminar un libro.
* La clase `Datos` proporciona métodos para leer y escribir libros en el almacenamiento local.

### Cómo funciona

Cuando el usuario agrega un nuevo libro, el código del archivo `app.js` crea un objeto `Libro` con los datos del libro. Luego, el código llama al método `agregarLibro` de la clase `Datos` para guardar el libro en el almacenamiento local.

Cuando el usuario hace clic en un libro de la lista, el código del archivo `app.js` elimina el libro del almacenamiento local.

### Cómo ejecutar el código

Para ejecutar el código, primero debes instalar las dependencias del proyecto. Puedes hacerlo con el siguiente comando:

```
npm install
```

Una vez que las dependencias estén instaladas, puedes ejecutar el código con el siguiente comando:

```
npm start
```

El código se ejecutará en el puerto 3000. Puedes abrir el siguiente URL en tu navegador para ver la interfaz de usuario:

```
http://localhost:3000
```

### ¿Cómo puedo contribuir al proyecto?

Si quieres contribuir al proyecto, puedes hacer lo siguiente:

* Encontrar errores en el código y enviar una solicitud de extracción (pull request) con las correcciones.
* Añadir nuevas características al código y enviar una solicitud de extracción (pull request) con las nuevas características.
* Documentar el código.

### ¿Cómo puedo obtener más ayuda?

Si tienes alguna pregunta sobre el proyecto, puedes abrir una nueva issue en el repositorio de GitHub.

Espero que este proyecto te sea útil. ¡Gracias por tu interés!