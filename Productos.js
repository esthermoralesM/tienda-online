class Productos{

    constructor(imagen, titulo, descripcion, precio){
        this.imagen=imagen;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.precio=precio;     
    }

    aJson(){
        let json={
           "imagen": this.imagen,
           "titulo": this.titulo,
           "descripcion": this.descripcion,
           "precio": this.precio
       }

       return json;
    }
}