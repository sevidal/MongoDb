db = db.getSiblingDB('knowtech0');
 
db.getCollectionNames().filter((value) =>
{return "alumno"==value;}).forEach(element => {
    db.alumno.remove({});
});

 for (var i = 0; i < 10000; i++) {
    db.alumno.insertOne(
        { IdAlumno: i, Nombre: 'Nombre' + i.toString(), Apellidos: 'Apellidos' + i.toString(), Dni: 'Dni' + i.toString()}
     );
 }





mongo -u "pepito" -p "abc123" "C:\MongoDb\insert.js"





