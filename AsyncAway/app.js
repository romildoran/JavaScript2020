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

//Async / Await
async function getUsuarioAW(){
    const IDs = await getUsuariosIDs;
    console.log(IDs);
    const usuario = await getUsuario(IDs[3]);
    console.log(usuario);
    const permisos = await getPermisos(usuario.id);
    console.log(permisos);
}

getUsuarioAW();