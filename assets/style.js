
    let nombreMarca = prompt('Ingrese el nombre de la marca')
    let numero_de_modelos = prompt('Ingrese el numero de modelos que va a agregar');


    let contador = 0;
    let listaModelos = [ ]



class Concesionaria {
    

    constructor( nombre, modelo) {

        this._nombre = function () {
            return nombre;
        };

        this._modelo = function () {
            return modelo || [];
        };

    }
    
    getName() {
        return this._nombre();
    }

    setName( nuevo_nombre ) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }

    agregarPaciente( modelo ) {
        this.paciente.push(modelo);
    }

    getModelo() {

        this._paciente().forEach(function ( elemento, index ) {
            console.log('--------------------------------------------')
            console.log(`Numero de Modelo: ${index}`);
            console.log(`Nombre: ${elemento._nombre()}`);
            console.log(`Motor: ${elemento._motor()}`);
            console.log(`Combustible: ${elemento._combustible()}`);
            console.log(`Valor modelo: ${elemento._valorModelo()}`);
        });

    }

    getValorTotalModelo(){

        let valorModelo = [ ]

        this._modelo().forEach(function ( elemento, index) {
            valorAtenciones.push(elemento._valorModelo());
        });
        console.log('--------------------------------------------')
        console.log('Valor total de modelo', valorModelo.reduce( ( valorAnterior, valorActual ) => valorAnterior+valorActual, 0 ))
    }

    getModeloNombre( busquedaDeNombre ) {

        this._modelo().forEach(function (elemento, index) {

            if (elemento._nombre() == busquedaDeNombre) {

                console.log('--------------------------------------------')
                console.log(`Numero de modelo: ${index}`);
                console.log(`Nombre: ${elemento._nombre()}`);
                console.log(`Motor: ${elemento._motor()}`);
                console.log(`Combustible: ${elemento._combustible()}`);
                console.log(`Valor modelo: ${elemento._valorModelo()}`);

            }

        });

    }
}
 
class Modelo {

    
    constructor( nombre, motor, combustible, valorModelo) {

        this._nombre = function () {
            return nombre;
        };

        this._motor = function () {
            return motor;
        };

        this._combustible = function () {
            return combustible;
        };

        this._valorModelo = function () {
            return valorModelo;
        };

    }

    getName() {
        return this._nombre();
    }
    getMotor() {
        return this._motor();
    }
    getCombustible() {
        return this._combustible();
    }
    getValormodelo() {
        return this._valorModelo();
    }

    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    setMotor(nueva_motor) {
        this._motor = function () {
            return nueva_motor;
        };
    }
    setCombustible(nuevo_combustible) {
        this._combustible = function () {
            return nuevo_combustible;
        };
    }
}



while( contador < numero_de_modelos ){

      
      let nombre = prompt('Ingrese el nombre del modelo')
      let motor = parseInt(prompt('Ingrese el tamaño del modelo'))
      let combustible = prompt('Ingrese el tipo de combustible que utiliza')
      let valorModelo = parseInt(prompt('Ingrese Valor del modelo'))

      let modelo = new Modelo( nombre, motor, combustible, valorModelo )
      
      listaModelos.push( modelo )
      
   
      contador++

}

let buscar = prompt('Ingrese el nombre del Modelo que quiere buscar')

const imprimirMarcas = ( marca, modelo, buscar )=>{
    
    console.log( 'Nombre de la marca:', marca.getName() )
    console.log('=================NOMBRE DE Modelos====================')
    
    for(let marca of marca){
        console.log('Salida de modelos', modelo._nombre())
    }
    console.log('=================SALIDA DE MODELO POR MARCA====================')
    consultorio.getModelo() 
    console.log('=================SALIDA DE MODELO BUSCADO POR NOMBRE====================')
    consultorio.getName(buscar);
    console.log('=================PRECIO TOTAL Modelo====================')
    consultorio.getValorTotalModelo();
}

let marca = new Marca( nombreMarca, listaModelo )

imprimirMarca( marca,listaModelos, buscar )
