import { Tesla, Audi, Toyota, Honda, Vehicle, Ford } from './04-liskov-b';


//! ESTE CODIGO VIOLENTA 2 PRINCIPIOS
//! 01.- Principio de sustitucion de liskov
//! 02.- Principio de opc ( Open and Close )

//? se violenta el principio de la sustitucion de liskiv porque:
//? si deseas cambiar una propiedad de la clase... 
//? no vas a poder hacerlo... cada auto que agreges deberas modificar la interfaz del car
//? imagina agregar 4300...

//? Se violenta el principio OPC porque debes abrir el
//? metodo y modificarlo en sus ifs 
//? para que funciona con otro coche..
(() => {
    
    // const printCarSeats = ( cars: (Tesla | Audi | Toyota | Honda)[] ) => {
    //? ahora aceptara TODAS LAS CLASES que hereden de Vehicle
    const printCarSeats = ( cars: Vehicle[] ) => {
        
        //! ahora puedes mandar X cantidad de veiculos sin abrir esta funcion =)
        cars.forEach( car => {
            //? car.constructor.name te da el nombre de su contructor 
            console.log( car.constructor.name,  car.getNumberOfSeats() )
        });

        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeats() )
        //         continue;
        //     }         
        // }


    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Ford(9)
    ];


    printCarSeats( cars );

})();