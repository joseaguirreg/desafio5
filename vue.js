new Vue({
   el: '#app',
   data:{
       productos: [],
       nuevoNombre: '',
       nuevoDescripcion: '',
       nuevoPrecio: ''
   },
   methods:{
       agregarProducto: function(){
            if(this.nuevoNombre != "" ){
                if(this.nuevoDescripcion != ""){
                    if(this.nuevoPrecio > 0){
                        this.productos.push({
                            nombre: this.nuevoNombre,
                            descripcion: this.nuevoDescripcion,
                            precio: this.nuevoPrecio
                        });
                        this.nuevoNombre='';
                        this.nuevoDescripcion='';
                        this.nuevoPrecio='';
                    }else{
                        alert("Porfavor, ingrese un precio válido")
                    }

                }else{
                    alert("Porfavor, ingrese la descripción del producto")
                }
            }else{
                alert("Porfavor, ingrese el nombre del producto")
            }
        },
        eliminar: function(nombre){
            this.productos.splice(nombre,1);
        },
        editar: function(nombre,descripcion,precio){
            console.log(nombre);
            console.log(descripcion);
            console.log(precio);
        }
   } 
});
Vue.config.devtools = true;