var productos= new Array();
  
var imagenes=$("#ropa a");

 document.getElementById("btnMuestra").addEventListener("click", filtrar, false);
 
 for(var i=0;i<imagenes.length;i++){
    imagenes[i].addEventListener("click", carrito, false);
}


function carrito(e){

    if(e.target==btn1){  
        
        imgsrc = $('#foto1').attr('src');
        titulo=$('#titulo1').html();
        descripcion=$('descripcion1').html();
        precio=parseFloat($('#euros1').html());

       var p1=new Productos(imgsrc, titulo, descripcion, precio);

       var product1= p1.aJson();

       productos.push(product1);
    }
    if(e.target==btn2){  

        imgsrc2 = $('#foto2').attr('src');
        titulo2=$('#titulo2').html();
        descripcion2=$('descripcion2').html();
        precio2=parseFloat($('#euros2').html());

        var p2=new Productos(imgsrc2, titulo2, descripcion2, precio2);

        var product2= p2.aJson();

        productos.push(product2);
    }
   
    if(e.target==btn3){
        
        imgsrc3 = $('#foto3').attr('src');
        titulo3=$('#titulo3').html();
        descripcion3=$('descripcion3').html();
        precio3=parseFloat($('#euros3').html());
     
        var p3=new Productos(imgsrc3, titulo3, descripcion3, precio3);
      
        var product3= p3.aJson();

        productos.push(product3);
    }

    if(e.target==btn4){

        imgsrc4 = $('#foto4').attr('src');
        titulo4=$('#titulo4').html();
        descripcion4=$('descripcion4').html();
        precio4=parseFloat($('#euros4').html());
     
        var p4=new Productos(imgsrc4, titulo4, descripcion4, precio4);
       
        var product4= p4.aJson();
    
        productos.push(product4);
 
    }
    if(e.target==btn5){
        imgsrc5 = $('#foto5').attr('src');
        titulo5=$('#titulo5').html();
        descripcion5=$('descripcion5').html();
        precio5=parseFloat($('#euros5').html());
     
        var p5=new Productos(imgsrc5, titulo5, descripcion5, precio5);
       
        var product5= p5.aJson();
    
        productos.push(product5);
    }

    if(e.target==btn6){
        imgsrc6 = $('#foto6').attr('src');
        titulo6=$('#titulo6').html();
        descripcion6=$('descripcion6').html();
        precio6=parseFloat($('#euros6').html());
     
        var p6=new Productos(imgsrc6, titulo6, descripcion6, precio6);
       
        var product6= p6.aJson();
    
        productos.push(product6);
    }

    if(e.target==btn7){
        imgsrc7 = $('#foto7').attr('src');
        titulo7=$('#titulo7').html();
        descripcion7=$('descripcion7').html();
        precio7=parseFloat($('#euros7').html());
     
        var p7=new Productos(imgsrc7, titulo7, descripcion7, precio7);
       
        var product7= p7.aJson();
    
        productos.push(product7);
    }

    if(e.target==btn8){
        imgsrc8 = $('#foto8').attr('src');
        titulo8=$('#titulo8').html();
        descripcion8=$('descripcion8').html();
        precio8=parseFloat($('#euros8').html());
     
        var p8=new Productos(imgsrc8, titulo8, descripcion8, precio8);
       
        var product8= p8.aJson();
    
        productos.push(product8);
    }

}

function filtrar(){
 
    let suma=0;
   
    for(let i=0;i<productos.length;i++){
  
     suma+=productos[i].precio;
   }

  tbody=document.querySelector("table tbody");

  tbody.innerHTML='';

  for(var i=0;i<productos.length;i++){
      var row=tbody.insertRow(i),
       nombreCelda=row.insertCell(0),
       precioCelda=row.insertCell(1);
      
      nombreCelda.innerHTML=productos[i].titulo
      precioCelda.innerHTML=productos[i].precio
     
  }

  tbody.appendChild(row);

   $("#total").html(suma); 
 
  }

  
  document.getElementById("vaciar").addEventListener("click", vaciarCarrito, false);

  function vaciarCarrito(){
        productos.length=0;
        $("#total").html(0);
  }