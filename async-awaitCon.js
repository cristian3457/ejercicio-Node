let empleados = [{
    id: 1,
    nombre: 'Juan',
}, {
    id: 2,
    nombre: 'Lucia',
}, {
    id: 3,
    nombre: 'Carmen',
}];
let puestos = [{
    id: 1,
    departamento: 'Recursos Humanos',
}, {
    id: 2,
    departamento: 'Ventas',
}, {
    id: 3,
    departamento: 'Ventas 1',
}];
let salarios = [{
    id: 1,
    sueldo: 1000,
}, {
    id: 2,
    sueldo: 1500,
}];


let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw (`No se ha encontrado el empleado con id ${id}`);
        return false;
    } else {
        return { nombre: empleadoDB.nombre, id };
    }
}
let getPuesto = async(empleado) => {
    let puestoDB = puestos.find(puesto => puesto.id === empleado.id);
    if (!puestoDB) {
        throw (`No se ha encontrado el puesto del empleado ${empleado.nombre}`);
    } else {
        return { nombre: empleado.nombre, puesto: puestoDB.departamento, id: empleado.id };
    }
}
let getSalario = async(puesto) => {
    let salarioDB = salarios.find(sueldo => sueldo.id === puesto.id);
    if (!salarioDB) {
        throw (`No se ha encontrado el salario para el empleado ${puesto.nombre}`);
    } else {
        return { nombre: puesto.nombre, salario: salarioDB.sueldo, puesto: puesto.puesto };
    }
}

let obtenerInfo = async(id) => {
    let empleado = await getEmpleado(id);
    let puest = await getPuesto(empleado);
    let res = await getSalario(puest);
    return `El salario del empleado ${res.nombre} en el puesto ${res.puesto} es: ${res.salario}$`;
}
obtenerInfo(2)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));