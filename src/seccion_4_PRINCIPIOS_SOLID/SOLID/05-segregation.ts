
interface Bird {
    eat(): void;
    swim(): void;
}

interface FlyingBird{
    fly():void;
}
interface RunningBird{
    run():void;
}
interface SwimingBird{
    swim():void;
}



//? typescript no tiene mixings, esto se resolveria con mixings.. pero se
//? puede adaptar esto.
class Humingbird implements Bird, FlyingBird{

    public fly(){}
    public eat(){}
    public swim(){}


}
class Tucan implements Bird, FlyingBird {

    public fly(){} 

    public eat(){}

    public swim(){}
}




//! LA AVESTRUZ NO VUELA
//! aquis e ve la violacion al principio de la segregacion de interfaz
//? debido a que los animales que no vuelen estan OBLIGADOS a implementar
//? los cambios que se hagan en la interfaz...y por lo tanto deberas modificar
//? clases que no ocupan este metodo
class Ostrich implements Bird, RunningBird{

    public eat(){}
    public run(){}
    public swim(){}

}
class Pinguin implements Bird, SwimingBird{

    public eat(){}
    public swim() {}
}

//? solucion, segrega en diferentes clases de tal manera que si X clase
//? implementa aveVoladora, debes implementar todo lo de AveVoladora



//! SOLUCION: crea multiples interfaces.. 
//! implementa interfaces segun las necesidades.. empieza con algo
//! general que hacen los pajaros ( volar ) y despues 
//! crea sub interfaces que personalizen
//! al animal