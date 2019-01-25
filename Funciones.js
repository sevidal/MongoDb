db.system.js.save({_id:"BuscarAlumno", value:
function (dni) {
    return db.alumno.find(
        { Dni: dni}
     );
}
});

db.system.js.save({_id:"InsertarAlumno", value:
function (id,nombre,apellidos,dni) {
    db.alumno.insertOne(
        { IdAlumno: id, Nombre: nombre, Apellidos: apellidos, Dni: dni}
     );
     return 'Alumno Insertado';
}
});

db.system.js.save({_id:"DeleteAlumno", value:
function (dni) {
    db.alumno.deleteOne(
        { Dni: dni}
     );
     return 'Alumno Eliminado';
}
});

db.system.js.save({_id:"UpdateAlumno", value:
function (id,nombre,apellidos,dni) {
db.alumno.updateOne(
    { IdAlumno: id },
    {
      $set: { Nombre: nombre, Apellidos: apellidos, Dni: dni },      
    }
    
 );
 return 'Alumno actualizado';
}
});

//Recuerda que puedes poner el try {} catch(e) {}

//db.loadServerScripts(); or db.loadServerScripts('UpdateAlumno');
//db.loadServerScripts();
//var x= addNumbers(5,5);
//print(x);