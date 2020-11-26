//5.SLOT MACHINE
/*Crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
Cada máquina tragaperras(instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que
representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola un mensaje:
"Congratulations!!!. You won <número de monedas> coins!!"
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
En caso contrario deberá mostrar otro mensaje:
"Good luck next time!!"
*/


/* Planteamiento del problema:
ESTRUCTURA:
- Clase tragaperras.
    - Contador de monedas (dentro de la clase)
    - Método play (dentro de la clase)
COMPORTAMIENTO:
- Cada vez que juego inserto moneda.
- Incremento modenas cuando llamo al método play.
- Genero 3 booleanos aleatorios cuando llamo al método play.
- Si los 3 booleanos son true: Mensaje y contador a cero. Si no, mensaje.
*/



class SlothMachine {
    constructor() { //el constructor es un método que sirve para crear objetos de esta clase. En este caso no necesito parámetros de entrada.
        this.coins = 0; //inicio la variable interna del objeto (lo hago en la clase para que todos los objetos empiecen por cero)
    }
    //creo el método play dentro de la clase para que todos los objetos puedan ejecutarla.
    play() { //no tengo que crear el método dentro de una variable.
        //llamo a la variable coins que se ha creado dentro del constructor para empezar a acumular:
        this.coins = this.coins + 1; //a this.coins le sumo uno cada vez que llamo a play.
        var randomBoolean1 = Math.random() < 0.5; //esta comparación me devuelve o true o false.
        var randomBoolean2 = Math.random() < 0.5; //esta comparación me devuelve o true o false.
        var randomBoolean3 = Math.random() < 0.5; //esta comparación me devuelve o true o false.

        if (randomBoolean1===true && randomBoolean2===true && randomBoolean3===true) { //no sería necesario hacer la comparación con cada uno a true pero así lo entiendo mejor.
           var coinsTemporal = this.coins;
            this.coins = 0;//lo hago antes del return para que se ejecute.
            return "Congratulations!!!. You won " + coinsTemporal + " coins!!"; //pongo coinsTemporal para que el valor sea el de this.coins con el acumulador y no el actualizado a cero.
        }else {
            return "Good luck next time!!"
        }
    }
}

const machine1 = new SlothMachine();
console.log (machine1.play()); 
console.log (machine1.play()); 
console.log (machine1.play()); 
console.log (machine1.play()); 
console.log (machine1.play()); 
console.log (machine1.play()); 
console.log (machine1.play()); 
