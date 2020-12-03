const fs = require("fs");

let listadoPorHacer = [];

const cargarDB = () => {
  try {
    listadoPorHacer = require("../DataBase/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile(`DataBase/data.json`, data, (err) => {
    if (err) throw new Error("No se pudo Guardar el contenido", err);
  });
};

const crear = (descripcion) => {
  cargarDB();

  let porHacer = {
    descripcion,
    completado: false,
  };

  listadoPorHacer.push(porHacer);

  guardarDB();

  return porHacer;
};

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();

  let index = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );

  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDB();

  let nuevoListado = listadoPorHacer.filter(
    (tarea) => tarea.descripcion !== descripcion
  );
  let index = nuevoListado.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );

  if (index >= 0) {
    return false;
  } else {
    listadoPorHacer = nuevoListado;
    guardarDB();
    return true;
  }
};

const getListar = (completado) => {

  cargarDB();

  let nuevoListado = listadoPorHacer.filter(
    (tarea) => tarea.completado !== completado
  );

    listadoPorHacer = nuevoListado;
    cargarDB();
    return listadoPorHacer;
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
  getListar,
};
