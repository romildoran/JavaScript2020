//JavaScript asíncrono

const segundaFuncion = () => {
    setTimeout(() => {
        console.log('Llamada de la segunda función');
    }, 5000);
}

const pirmeraFuncion = () => {
    console.log('Inicio de la primera función');

    segundaFuncion();

    console.log('Fin de la primera función');
}

pirmeraFuncion();

const getUsuarios = () => {
    setTimeout(() => {
        const userIDs = [101, 102, 103, 104, 105];
        console.log(userIDs);

        setTimeout((id) => {
            const usuario = {
                email: 'grover@mail.com',
                nombre: 'Grover'
            }
            console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

            setTimeout(() => {
                const permisos = ['admin', 'creador'];
                console.log(permisos);
            }, 1500, userIDs[3]);
        }, 1500, userIDs[2]);
    }, 1500);
}

getUsuarios();