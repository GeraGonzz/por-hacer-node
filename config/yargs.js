const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de Crear.",
};

const completado = {
  demand: true,
  alias: "c",
  // default: true,
  desc: "Descripción de Actualizar.",
};

const argv = require("yargs")
  .command("crear", "Crea un tarea por hacer", { descripcion })
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado,
  })
  .command("borrar", "Borra la tarea", { descripcion })
  .command("listar", "Lista el estado completado de una tarea", {
    completado,
  })
  .help().argv;

module.exports = {
  argv,
};
