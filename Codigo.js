Expresiones Lambda
Funciones sin nombre = Funciones anónimas

db.getCollectionNames().filter((value) =>
{return "alumno"==value;}).forEach(element => {
    db.alumno.remove({});
});

