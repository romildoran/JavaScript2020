let promesa = new Promise((resolve, reject) => {
    if (true) {
        resolve('La operación fue exitosa');
    } else {
        reject("Hubo un error");
    }
});

promesa.then(respuesta => {
    console.log('Response: ' + respuesta);
}).catch(error => {
    console.log("Error: " + error);
})

//ejemplo 2

let miPromesa = Promise.resolve("Comida");
miPromesa.then(resp => console.log(resp));


//ejemplo 3

var miPromesa3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(4), 2000);
})

miPromesa3.then(resp => {
    resp += 5;
    console.log(resp);
})


//de Callbacks a promesas
const getUsuariosIDs = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([101, 102, 103, 104, 105]);
    }, 1500);
});

const getUsuario = userID => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const usuario = {
                email: 'grover@mail.com',
                nombre: 'Grover'
            }
            resolve(`${userID} - ${usuario.email} - ${usuario.nombre}`);
        }, 1500)
    });
}

const getPermisos = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const permiso = ['admin', 'creador'];
            resolve (permiso);
        }, 1500)
    });
}

getUsuariosIDs.then(IDs => {
    console.log(IDs);
    return getUsuario(IDs[3]);
})
    .then(usuario => {
        console.log(usuario);
        return getPermisos();
    })
    .then(permisos => {
        console.log(permisos);
    })
    .catch(() => {
        console.log('Error');
    });

    