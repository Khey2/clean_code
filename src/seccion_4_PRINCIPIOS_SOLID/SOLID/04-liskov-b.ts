

// buscas que las sub clases ( Tesla, Audio, Toyota...etc ) tengan las
//funciones / propiedades de la clase Vehicle, e sla interfaz de las
//sub clase

export abstract class Vehicle { 

    //forma 1
    // getNumberOfSeats(): number{
    //     throw Error("Methos not implemented");
    // }

    // forma 2
    //? recuerda, las clases que exitendan de la clase
    //? abstracta deben implementar
    //? los metodos y propiedades abstractas
    abstract getNumberOfSeats(): number;
}






//? Todas estas clases se repite la funcion getNumberOfSeats()
//? aunque puede que si se ocupen distintos metodos si cambia logica
export class Tesla extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super(); //? regla para usar herencia de ABSTRACT
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
