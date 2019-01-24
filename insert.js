use knowtech2
 
 for (var i = 0; i < 10000; i++) {
    db.alumno.insertOne(
        { IdAlumno: i, Nombre: "Nombre" + i.toString(), Apellidos: "Apellidos" + i.toString(), Dni: "Dni" + i.toString()}
     )
 }
